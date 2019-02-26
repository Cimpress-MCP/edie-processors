import {propertiesToText, translateProps} from './common/base';

const buttonToMjml = (item, blockRenderer, isTopLevelNode) => {
    let keyTranslations = {
        'backgroundColor': 'background-color',
        'textAlign': 'text-align',
    };

    let mjmlProperties = translateProps(item.properties, keyTranslations);
    if (mjmlProperties['borderSize'] && mjmlProperties['borderColor']) {
        mjmlProperties['border'] = mjmlProperties['borderSize'] + ' solid ' + mjmlProperties['borderColor'];
    }

    let properties = propertiesToText(mjmlProperties, ['content', 'borderSize', 'borderColor']);

    let mjButton = `<mj-button ${properties}>${item.properties.content}</mj-button>`;

    // mj-spacer NOT allowed in mj-body
    return isTopLevelNode
        ? `<mj-section ><mj-column >${mjButton}</mj-column></mj-section>`
        : mjButton;
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
