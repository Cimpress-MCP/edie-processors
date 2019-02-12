import {propertiesToText, translateProps} from './common/base';

function columnToMjml(item, childrenRenderer) {
    let keyTranslations = {
        'backgroundColor': 'background-color',
    };

    let mjmlProperties = translateProps(item.properties, keyTranslations);
    if (!mjmlProperties['padding']) {
        mjmlProperties['padding'] = '0px';
    }
    if (mjmlProperties['borderSize'] && mjmlProperties['borderColor']) {
        mjmlProperties['border'] = mjmlProperties['borderSize'] + ' solid ' + mjmlProperties['borderColor'];
    }

    let properties = propertiesToText(mjmlProperties, ['content', 'borderSize', 'borderColor']);
    let items = '';
    (item.children || []).forEach((x) => {
        items += childrenRenderer(x, childrenRenderer);
    });
    return `<mj-column ${properties}>${items}</mj-column>`;
}


export {
    columnToMjml,
};
