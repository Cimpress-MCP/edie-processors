import {encloseInMjmlSection, toMjml} from './common/base';
import {EDIE_BLOCK_TYPE, EDIE_PROPS} from './common/formatDefinition';

const imageToMjml = (item, blockRenderer, isTopLevelNode) => {
    let mjImage = toMjml('mj-image', item.properties, EDIE_PROPS[EDIE_BLOCK_TYPE.IMAGE]);

    if (item.properties.condition) {
        const openBlock = item.properties.condition;
        const closeBlock = item.properties.condition.indexOf(' ') >= 0
            ? item.properties.condition.split(' ')[0]
            : item.properties.condition;

        const mjText = toMjml('mj-text', {
            content: item.properties.conditionAlt,
        }, EDIE_PROPS[EDIE_BLOCK_TYPE.TEXT]);

        mjImage = `{{#${openBlock}}}${mjImage}{{else}}${mjText}{{/${closeBlock}}`;
    }

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
