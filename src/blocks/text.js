import {JSDOM} from 'jsdom';
import {translateProps, propertiesToText} from './common/base';

const dom = new JSDOM();

function textToMjml(item, encloseInSection) {
    // Special handler for placeholders
    const frag = JSDOM.fragment(item.properties.content);
    let placeholders = frag.querySelectorAll('span[type="placeholder"]');
    let content = item.properties.content;
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

    let mjmlProperties = translateProps(
        item.properties, {
            backgroundColor: 'container-background-color',
        });

    if (!mjmlProperties['padding']) {
        mjmlProperties['padding'] = '0px';
    }

    let properties = propertiesToText(mjmlProperties, ['content']);

    let mjText = `<mj-text ${properties}>${content}</mj-text>`;

    return encloseInSection
        ? `<mj-section><mj-column>${mjText}</mj-column></mj-section>`
        : mjText;
}

export {
    textToMjml,
};
