import {EDIE_BLOCK_TYPE} from './common/base';
import {textToMjml} from './text';
import {vspacerToMjml} from './vspacer';

const loopToMjml = (item, childrenRenderer, isAtMainLevel ) => {
    let items = '';
    (item.children || []).forEach((x) => {
        if (isAtMainLevel) {
            switch (x.type) {
            case EDIE_BLOCK_TYPE.TEXT:
                items += textToMjml(x, true);
                break;
            case EDIE_BLOCK_TYPE.VSPACER:
                items += vspacerToMjml(x, true);
                break;
            default:
                items += childrenRenderer(x, childrenRenderer);
                break;
            }
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
