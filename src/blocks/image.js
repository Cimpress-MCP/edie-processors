import {propertiesToText, translateProps} from './common/base';

const imageToMjml = (item) => {
    const translations = {backgroundColor: 'container-background-color'};
    const {borderSize, borderColor, ...mjmlProperties} = translateProps(item.properties, translations);

    if (borderSize && borderColor) {
        mjmlProperties.border = `${borderSize} solid ${borderColor}`;
    }
    const properties = propertiesToText(mjmlProperties);

    return `<mj-image ${properties} />`;
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
