import {propertiesToText, translateProps} from './common/base';

const vspacerToMjml = (item) => {
    let keyTranslations = {
        'backgroundColor': 'container-background-color',
    };

    let mjmlProperties = translateProps(item.properties, keyTranslations);

    let properties = propertiesToText(mjmlProperties, []);

    return `<mj-spacer ${properties}/>`;
};

const vspacerToText = (item) => {
    return '-----\r\n';
};

export {
    vspacerToMjml,
    vspacerToText,
};
