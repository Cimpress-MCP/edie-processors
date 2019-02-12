import {propertiesToText, translateProps} from './common/base';

function buttonToMjml(item) {
    let keyTranslations = {
        'backgroundColor': 'background-color',
        'textAlign': 'text-align',
    };

    let mjmlProperties = translateProps(item.properties, keyTranslations);
    mjmlProperties['border'] = mjmlProperties['borderSize'] + ' solid ' + mjmlProperties['borderColor'];

    let properties = propertiesToText(mjmlProperties, ['content', 'borderSize', 'borderColor']);
    return `<mj-button ${properties}>${item.properties.content}</mj-button>`;
}

export {
    buttonToMjml,
};
