import {encloseInMjmlSection, toMjml} from './common/base';
import {EDIE_PROPS, EDIE_BLOCK_TYPE} from './common/formatDefinition';

const buttonToMjml = (item, blockRenderer, isTopLevelNode) => {
    let mjButton = toMjml('mj-button', item.properties, EDIE_PROPS[EDIE_BLOCK_TYPE.BUTTON]);

    // mj-button NOT allowed in mj-body, so in case this is what EDIE
    // defines, we need to enclose in section/column
    return isTopLevelNode ? encloseInMjmlSection(mjButton) : mjButton;
};

const buttonToText = (item) => {
    let result = item.properties.content + '\r\n';
    if (item.properties.href) {
        result += `[${item.properties.href}]\r\n`;
    }
    return result;
};

export {
    buttonToMjml,
    buttonToText,
};
