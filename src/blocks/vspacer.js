import {encloseInMjmlSection, toMjml} from './common/base';
import {EDIE_BLOCK_TYPE, EDIE_PROPS} from './common/formatDefinition';

const vspacerToMjml = (item, blockRenderer, isTopLevelNode) => {
    let mjSpacer = toMjml('mj-divider', item.properties, EDIE_PROPS[EDIE_BLOCK_TYPE.VSPACER]);

    // mj-spacer NOT allowed in mj-body, so in case this is what EDIE
    // defines, we need to enclose in section/column
    return isTopLevelNode ? encloseInMjmlSection(mjSpacer) : mjSpacer;
};

const vspacerToText = (item, blockRenderer, isTopLevelNode) => {
    return '-----\r\n';
};

export {
    vspacerToMjml,
    vspacerToText,
};
