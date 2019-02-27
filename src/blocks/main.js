import {toMjml} from './common/base';
import {EDIE_BLOCK_TYPE, EDIE_PROPS} from './common/formatDefinition';

const mainToMjml = (item, blockRenderer) => {
    //
    // TODO: Make adding these sections (this one plus the one after the loop) configurable.
    let items = `<mj-section background-color="${item.properties['emailBackgroundColor']}"><mj-column><mj-text padding="2px"></mj-text></mj-column></mj-section>`;
    (item.children || []).forEach((x) => {
        items += blockRenderer(x, blockRenderer, true);
    });
    items += `<mj-section background-color="${item.properties['emailBackgroundColor']}"><mj-column><mj-text padding="2px"></mj-text></mj-column></mj-section>`;

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
