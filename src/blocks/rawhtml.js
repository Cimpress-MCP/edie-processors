import {toMjml} from './common/base';
import {EDIE_BLOCK_TYPE, EDIE_PROPS} from './common/formatDefinition';

const rawhtmlToMjml = (item, blockRenderer, isTopLevelNode) => {
    let mjRaw = toMjml('mj-raw', item.properties, EDIE_PROPS[EDIE_BLOCK_TYPE.RAWHTML]);

    // mj-spacer NOT allowed in mj-body, so in case this is what EDIE
    // defines, we need to enclose in section/column
    return mjRaw;
};

const rawhtmlToText = (item, blockRenderer, isTopLevelNode) => {
    return '-----\r\n';
};

export {
    rawhtmlToMjml,
    rawhtmlToText,
};
