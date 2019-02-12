import {EDIE_BLOCK_TYPE} from './common/base';
import {textToMjml} from './text';

function loopToMjml(item, childrenRenderer, isAtMainLevel ) {
    let items = '';
    (item.children || []).forEach((x) => {
        if (isAtMainLevel && x.type === EDIE_BLOCK_TYPE.TEXT) {
            items += textToMjml(x, true);
        } else {
            items += childrenRenderer(x, childrenRenderer);
        }
    });

    return '{{#' + item.properties.loopPath + '}}'
        + items
        + '{{/' + item.properties.loopPath + '}}';
}
export {
    loopToMjml,
};
