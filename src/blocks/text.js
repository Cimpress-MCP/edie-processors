import {JSDOM} from 'jsdom';
import htmlToText from 'html-to-text';

import {translateProps, propertiesToText} from './common/base';

const dom = new JSDOM();

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

const textToMjml = (item, encloseInSection) => {
    // Special handler for placeholders
    let content = convertPlaceholders(item.properties.content);

    let mjmlProperties = translateProps(
        item.properties, {
            backgroundColor: 'container-background-color',
        });

    if (!mjmlProperties['padding']) {
        mjmlProperties['padding'] = '0px';
    }

    let properties = propertiesToText(mjmlProperties, ['content']);

    let mjText = `<mj-text ${properties}>${content}</mj-text>`;

    // mj-text NOT allowed in mj-body
    return encloseInSection
        ? `<mj-section padding="0px"><mj-column padding="0px">${mjText}</mj-column></mj-section>`
        : mjText;
};

const textToText = (item) => {
    // Special handler for placeholders
    let content = convertPlaceholders(item.properties.content);

    return htmlToText.fromString(content, {
        wordwrap: 130,
        ignoreImage: true,
        preserveNewlines: true,
        format: {
            text: function(elem) {
                return elem.data + ' ';
            },
        },
    }).trim() + '\r\n';
};

export {
    textToMjml,
    textToText,
};
