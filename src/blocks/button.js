import {propertiesToText, translateProps} from './common/base';

const buttonToMjml = (item) => {
    let keyTranslations = {
        'backgroundColor': 'background-color',
        'textAlign': 'text-align',
    };

    let mjmlProperties = translateProps(item.properties, keyTranslations);
    if (mjmlProperties['borderSize'] && mjmlProperties['borderColor']) {
        mjmlProperties['border'] = mjmlProperties['borderSize'] + ' solid ' + mjmlProperties['borderColor'];
    }

    let properties = propertiesToText(mjmlProperties, ['content', 'borderSize', 'borderColor']);

    return `<mj-button ${properties}>${item.properties.content}</mj-button>`;
};

const buttonToText = (item) => {
    let result = item.properties.content + '\r\n';
    if (item.properties.href) {
        result += `[${item.properties.href}]\r\n`;
    }
    return result;
};

export {
    buttonToMjml,
    buttonToText,
};
