import {EDIE_BLOCK_TYPE} from './common/base';
import {textToMjml} from './text';
import {vspacerToMjml} from './vspacer';

const loopToMjml = (item, childrenRenderer, isAtMainLevel ) => {
    let items = '';
    (item.children || []).forEach((x) => {
        if (isAtMainLevel && x.type === EDIE_BLOCK_TYPE.TEXT) {
            items += textToMjml(x, true);
        } else if (isAtMainLevel && x.type === EDIE_BLOCK_TYPE.VSPACER) {
            items += vspacerToMjml(x, true);
        } else {
            items += childrenRenderer(x, childrenRenderer);
        }
    });

    return '{{#' + item.properties.loopPath + '}}'
        + items
        + '{{/' + item.properties.loopPath + '}}';
};

const loopToText = (item, childrenRenderer, isAtMainLevel ) => {
    let items = '';

    (item.children || []).forEach((x) => {
        items += childrenRenderer(x, childrenRenderer);
    });

    return '{{#' + item.properties.loopPath + '}}\r\n'
        + items
        + '{{/' + item.properties.loopPath + '}}\r\n'
        + '\r\n';
};

export {
    loopToMjml,
    loopToText,
};
