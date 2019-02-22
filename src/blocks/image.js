import { propertiesToText } from './common/base';

const imageToMjml = (item) => {
    const mjmlProperties = item.properties
    const properties = propertiesToText(mjmlProperties);

    return `<mj-image ${properties} />`;
};

const imageToText = (item) => {
    const alt = item.properties.alt || 'image';
    const href = item.properties.href ? `(${item.properties.href})` : '';
    return `[${alt}]${href}`;
};

export {
    imageToMjml,
    imageToText,
};
