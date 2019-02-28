import {JSDOM} from 'jsdom';
import htmlToText from 'html-to-text';
import {encloseInMjmlSection, toMjml} from './common/base';
import {EDIE_BLOCK_TYPE, EDIE_PROPS} from './common/formatDefinition';

const dom = new JSDOM();

const extractColorClasses = (html) => {
    let penClasses = {};
    let penClassesRegex = /edie-color-p-([a-zA-Z0-9]{6})/g;
    let penMatches;
    do {
        penMatches = penClassesRegex.exec(html);
        if (penMatches) {
            penClasses[penMatches[0]] = penMatches[1]; // x[className]=color
        }
    } while (penMatches);

    let markerClasses = {};
    let markerClassesRegex = /edie-color-m-([a-zA-Z0-9]{6})/g;
    let markerMatches;
    do {
        markerMatches = markerClassesRegex.exec(html);
        if (markerMatches) {
            markerClasses[markerMatches[0]] = markerMatches[1];
        }
    } while (markerMatches);

    return {
        pen: penClasses,
        marker: markerClasses,
    };
};

const convertDynamicImages = (html) => {
    const frag = JSDOM.fragment(html);
    let placeholders = frag.querySelectorAll('span[type="dynamicImage"]');
    let content = html;
    if (placeholders.length > 0 ) {
        placeholders.forEach((ph) => {
            let image = {
                alt: ph.getAttribute('alt'),
                src: ph.getAttribute('src'),
                condition: ph.getAttribute('condition'),
                width: ph.getAttribute('width'),
                height: ph.getAttribute('height'),
            };

            let imgDom = dom.window.document.createElement('img');
            imgDom.setAttribute('src', image.src || '');
            imgDom.setAttribute('alt', image.alt || '');
            if (image.width && image.width !== '') {
                imgDom.setAttribute('width', image.width || '');
            }
            if (image.height && image.height !== '') {
                imgDom.setAttribute('height', image.height || '');
            }

            if (image.condition) {
                ph.parentNode.insertBefore(dom.window.document.createTextNode(`{{#if ${image.condition}}}`), ph);
                ph.parentNode.insertBefore(imgDom, ph);
                ph.parentNode.insertBefore(dom.window.document.createTextNode('{{/if}}'), ph);
            } else {
                ph.parentNode.insertBefore(imgDom, ph);
            }

            ph.parentNode.removeChild(ph);
        });

        let x = dom.window.document.createElement('div');
        x.appendChild(frag);
        content = x.innerHTML;
    }
    return content;
};

const convertPlaceholders = (html) => {
    const frag = JSDOM.fragment(html);
    let placeholders = frag.querySelectorAll('span[type="placeholder"]');
    let content = html;
    if (placeholders.length > 0 ) {
        placeholders.forEach((ph) => {
            let code = ph.getAttribute('content');
            ph.parentNode.insertBefore(dom.window.document.createTextNode(code), ph);
            ph.parentNode.removeChild(ph);
        });

        let x = dom.window.document.createElement('div');
        x.appendChild(frag);
        content = x.innerHTML;
    }
    return content;
};

const convertMarkElementsToSpan = (html) => {
    let r = html.replace(/<mark /g, '<span ');
    r = r.replace(/<\/mark>/g, '</span>');
    return r;
};

const convertParagraphElementsToDiv = (html) => {
    let r = html.replace(/<p /g, '<div ');
    r = r.replace(/<p>/g, '<div>');
    r = r.replace(/<\/p>/g, '</div>');
    return r;
};

const textToMjml = (item, blockRenderer, isTopLevelNode) => {
    let content = convertPlaceholders(item.properties.content);
    content = convertDynamicImages(content);
    content = convertMarkElementsToSpan(content);

    if (item.properties.treatParagraphsAsDiv) {
        content = convertParagraphElementsToDiv(content);
    }

    item.properties.content = content;

    const mjText = toMjml('mj-text', item.properties, EDIE_PROPS[EDIE_BLOCK_TYPE.TEXT]);

    // mj-text NOT allowed in mj-body, so in case this is what EDIE
    // defines, we need to enclose in section/column
    return isTopLevelNode ? encloseInMjmlSection(mjText, {'background-color': item.properties.backgroundColor}) : mjText;
};

const textToText = (item, blockRenderer, isTopLevelNode) => {
    // Special handler for placeholders
    let content = convertPlaceholders(item.properties.content);
    content = convertDynamicImages(content);

    let text = htmlToText.fromString(content, {
        wordwrap: 130,
        ignoreImage: true,
        preserveNewlines: true,
        format: {
            text: function(elem) {
                return elem.data + ' ';
            },
        },
    }).trim() + '\r\n';

    return text.replace(/&nbsp;/g, ' ');
};

export {
    textToMjml,
    textToText,
    extractColorClasses,
};
