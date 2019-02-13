import {propertiesToText, translateProps, EDIE_BLOCK_TYPE} from './common/base';
import {textToMjml} from './text';
import {loopToMjml} from './loop';

const mainToMjml = (item, childrenRenderer) => {
    let keyTranslations = {
        'backgroundColor': 'background-color',
        'emailWidth': 'width',
    };

    let properties = propertiesToText(translateProps(item.properties, keyTranslations), ['emailBackgroundColor', 'isPublic']);
    let items = '';
    (item.children || []).forEach((x) => {
        if (x.type === EDIE_BLOCK_TYPE.TEXT) {
            items += textToMjml(x, childrenRenderer, true);
        } else if (x.type === EDIE_BLOCK_TYPE.LOOP) {
            items += loopToMjml(x, childrenRenderer, true);
        } else {
            items += childrenRenderer(x, childrenRenderer);
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
