import {toMjml} from './common/base';
import {EDIE_BLOCK_TYPE, EDIE_PROPS} from './common/formatDefinition';

const mainToMjml = (item, blockRenderer) => {
    let items = '';
    (item.children || []).forEach((x) => {
        items += blockRenderer(x, blockRenderer, true);
    });

    item.properties.children = items;

    let wrapper = toMjml('mj-wrapper', {
        'emailBackgroundColor': item.properties.emailBackgroundColor,
        'fullWidth': 'full-width',
        'padding': item.properties.padding || '0px',
        'children': items,
    }, EDIE_PROPS[EDIE_BLOCK_TYPE.MAIN]);

    // these are used for the wrapper, do not add at the body.
    delete item.properties.emailBackgroundColor;
    delete item.properties.padding;

    item.properties.children = wrapper;

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
