import {propertiesToText, translateProps} from './common/base';

function rowToMjml(item, childrenRenderer) {
    let keyTranslations = {
        'backgroundColor': 'background-color',
    };

    let mjmlProperties = translateProps(item.properties, keyTranslations);
    mjmlProperties['full-width'] = 'full-width';
    if (!mjmlProperties['padding']) {
        mjmlProperties['padding'] = '0px';
    }

    let properties = propertiesToText(mjmlProperties);
    let items = '';
    (item.children || []).forEach((x) => {
        items += childrenRenderer(x, childrenRenderer);
    });
    return `<mj-section ${properties}>${items}</mj-section>
`;
}

const rowToText = (item, childrenRenderer) => {
    let result = '';
    (item.children || []).forEach((x) => {
        result += childrenRenderer(x, childrenRenderer);
    });
    return result + '\r\n';
};

export {
    rowToMjml,
    rowToText,
};
