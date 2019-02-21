import {propertiesToText, translateProps} from './common/base';

function rowToMjml(item, childrenRenderer) {
    let keyTranslations = {
        'backgroundColor': 'background-color',
    };

    let mjmlProperties = translateProps(item.properties, keyTranslations);

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
