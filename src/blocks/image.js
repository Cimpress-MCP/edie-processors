import {encloseInMjmlSection, toMjml} from './common/base';
import {EDIE_BLOCK_TYPE, EDIE_PROPS} from './common/formatDefinition';

const imageToMjml = (item, blockRenderer, isTopLevelNode) => {
    let mjImage = toMjml('mj-image', item.properties, EDIE_PROPS[EDIE_BLOCK_TYPE.IMAGE]);

    // mj-image NOT allowed in mj-body, so in case this is what EDIE
    // defines, we need to enclose in section/column
    return isTopLevelNode ? encloseInMjmlSection(mjImage) : mjImage;
};

const imageToText = (item) => {
    const alt = `${(item.properties.alt || 'Image')}\r\n`;
    const href = item.properties.href ? `[${item.properties.href}]\r\n` : '';
    return `${alt}${href}`;
};

export {
    imageToMjml,
    imageToText,
};
