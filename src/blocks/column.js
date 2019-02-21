import {propertiesToText, translateProps} from './common/base';

const columnToMjml = (item, childrenRenderer) => {
    let keyTranslations = {
        'backgroundColor': 'background-color',
    };

    let mjmlProperties = translateProps(item.properties, keyTranslations);
    if (mjmlProperties['borderSize'] && mjmlProperties['borderColor']) {
        mjmlProperties['border'] = mjmlProperties['borderSize'] + ' solid ' + mjmlProperties['borderColor'];
    }

    let properties = propertiesToText(mjmlProperties, ['content', 'borderSize', 'borderColor']);
    let items = '';
    (item.children || []).forEach((x) => {
        items += childrenRenderer(x, childrenRenderer);
    });
    return `<mj-column ${properties}>${items}</mj-column>`;
};

const columnToText = (item, childrenRenderer) => {
    let result = '';
    (item.children || []).forEach((x) => {
        result += childrenRenderer(x, childrenRenderer);
    });
    return result + '\r\n';
};

export {
    columnToMjml,
    columnToText,
};
