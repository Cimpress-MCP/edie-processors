import {propertiesToText, translateProps} from './common/base';

const rowToMjml = (item, blockRenderer, isTopLevelNode) => {
    let keyTranslations = {
        'backgroundColor': 'background-color',
    };

    let mjmlProperties = translateProps(item.properties, keyTranslations);

    let properties = propertiesToText(mjmlProperties);
    let items = '';
    (item.children || []).forEach((x) => {
        // Note: All children of a row are NOT top level elements
        items += blockRenderer(x, blockRenderer, false);
    });
    return `<mj-section ${properties}>${items}</mj-section>
`;
};

const rowToText = (item, blockRenderer, isTopLevelNode) => {
    let result = '';
    (item.children || []).forEach((x) => {
        // Note: All children of a row are NOT top level elements
        result += blockRenderer(x, blockRenderer, false);
    });
    return result + '\r\n';
};

export {
    rowToMjml,
    rowToText,
};
