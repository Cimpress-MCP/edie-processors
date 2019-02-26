import {propertiesToText, translateProps} from './common/base';

const vspacerToMjml = (item, blockRenderer, isTopLevelNode) => {
    let keyTranslations = {
        'backgroundColor': 'container-background-color',
    };

    let mjmlProperties = translateProps(item.properties, keyTranslations);

    let properties = propertiesToText(mjmlProperties, []);

    let mjSpacer =`<mj-spacer ${properties}/>`;

    // mj-spacer NOT allowed in mj-body
    return isTopLevelNode
        ? `<mj-section padding="0px"><mj-column padding="0px">${mjSpacer}</mj-column></mj-section>`
        : mjSpacer;
};

const vspacerToText = (item, blockRenderer, isTopLevelNode) => {
    return '-----\r\n';
};

export {
    vspacerToMjml,
    vspacerToText,
};
