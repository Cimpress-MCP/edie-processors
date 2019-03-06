import {toMjml} from './common/base';
import {EDIE_BLOCK_TYPE, EDIE_PROPS} from './common/formatDefinition';

const mainToMjml = (item, blockRenderer) => {
    let items = '';
    (item.children || []).forEach((x) => {
        items += blockRenderer(x, blockRenderer, true);
    });

    item.properties.children = items;

    return toMjml('mj-body', item.properties, EDIE_PROPS[EDIE_BLOCK_TYPE.MAIN]);
};

const mainTotext = (item, blockRenderer) => {
    let items = '';
    (item.children || []).forEach((x) => {
        items += blockRenderer(x, blockRenderer, true);
    });
    return items + '\r\n';
};

export {
    mainToMjml,
    mainTotext,
};
