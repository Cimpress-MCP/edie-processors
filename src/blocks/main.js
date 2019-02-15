import {propertiesToText, translateProps, EDIE_BLOCK_TYPE} from './common/base';
import {textToMjml} from './text';
import {loopToMjml} from './loop';
import {vspacerToMjml} from './vspacer';

const mainToMjml = (item, childrenRenderer) => {
    let keyTranslations = {
        'backgroundColor': 'background-color',
        'emailWidth': 'width',
    };

    let properties = propertiesToText(translateProps(item.properties, keyTranslations), ['emailBackgroundColor', 'isPublic']);
    let items = '';
    (item.children || []).forEach((x) => {
        switch (x.type) {
        case EDIE_BLOCK_TYPE.TEXT:
            items += textToMjml(x, childrenRenderer, true);
            break;
        case EDIE_BLOCK_TYPE.VSPACER:
            items += vspacerToMjml(x, true);
            break;
        case EDIE_BLOCK_TYPE.LOOP:
            items += loopToMjml(x, childrenRenderer, true);
            break;
        default:
            items += childrenRenderer(x, childrenRenderer);
            break;
        }
    });
    return `<mj-body ${properties}>${items}</mj-body>`;
};

const mainTotext = (item, childrenRenderer) => {
    let items = '';
    (item.children || []).forEach((x) => {
        items += childrenRenderer(x, childrenRenderer);
    });
    return items + '\r\n';
};

export {
    mainToMjml,
    mainTotext,
};
