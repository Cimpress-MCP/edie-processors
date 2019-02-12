import {blockTypes} from '../blockTypes';
import {textToMjml} from './text';

function loopToMjml(item, childrenRenderer, isAtMainLevel ) {
    let items = '';
    (item.children || []).forEach((x) => {
        if (isAtMainLevel && x.type === blockTypes.TEXT) {
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
