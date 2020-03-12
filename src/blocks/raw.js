import {toMjml} from './common/base';
import {EDIE_BLOCK_TYPE, EDIE_PROPS} from './common/formatDefinition';

const rawToMjml = (item, blockRenderer, isTopLevelNode) => {
    let mjRaw = toMjml('mj-raw', item.properties, EDIE_PROPS[EDIE_BLOCK_TYPE.RAW]);

    // mj-spacer NOT allowed in mj-body, so in case this is what EDIE
    // defines, we need to enclose in section/column
    return mjRaw;
};

const rawToText = (item, blockRenderer, isTopLevelNode) => {
    return item.properties.content + '\r\n';
};

export {
    rawToMjml,
    rawToText,
};
