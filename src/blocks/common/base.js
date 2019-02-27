import {EDIE_BLOCK_TYPE, EDIE_PROP_TYPE} from './formatDefinition';

const translateProps = (props, translations) => {
    let translated = {};
    Object.keys(props)
        .forEach((key) => {
            if (translations[key]) {
                translated[translations[key]] = props[key];
            } else {
                translated[key] = props[key];
            }
        });
    return translated;
};

const propertiesToText = (props, keysToIgnore) => {
    let properties = '';
    Object.keys(props || {})
        .filter((key) => !(keysToIgnore || []).includes(key))
        .forEach((key) => {
            // TODO FIX: Make sure props[key] is escaped !!!
            if (props[key]) {
                properties = properties + ' ' + key + '="' + props[key] + '"';
            }
        });
    return properties.trim();
};

const toMjml = (mjElement, edieProps, ediePropsDefinition) => {
    let body = '';

    let propsAsText = '';
    let computedProp;

    Object.keys(ediePropsDefinition || {})
    // Handle only attributes with value
        .filter((k) => edieProps[k] || ediePropsDefinition[k].type === EDIE_PROP_TYPE.COMPUTED)
        .forEach((key) => {
            let edieKeyDefinition = ediePropsDefinition[key];
            if (!edieKeyDefinition) {
                console.warn(`No definition found for creating '${mjElement}' and property '${key}'` );
                return;
            }
            switch (edieKeyDefinition.type) {
            //
            case EDIE_PROP_TYPE.BODY:
                body = edieProps[key];
                break;

            case EDIE_PROP_TYPE.AS_IS:
                propsAsText = propsAsText + ' ' + (key) + '="' + edieProps[key] + '"';
                break;

            case EDIE_PROP_TYPE.TRANSLATED:
                propsAsText = propsAsText + ' ' + (ediePropsDefinition[key].mjAttribute) + '="' + edieProps[key] + '"';
                break;

            case EDIE_PROP_TYPE.COMPUTED:
                console.log('x', ediePropsDefinition[key]);
                computedProp = ediePropsDefinition[key].compute(edieProps);
                if (computedProp) {
                    propsAsText = propsAsText + ' ' + (computedProp.key) + '="' + computedProp.value + '"';
                }
                break;
            }
        });

    return `<${mjElement} ${propsAsText.trim()}>${body}</${mjElement}>`;
};

const encloseInMjmlSection = (item) => {
    return `<mj-section padding="0px"><mj-column padding="0px">${item}</mj-column></mj-section>`
};

export {
    toMjml,
    encloseInMjmlSection,
    translateProps,
    propertiesToText,
};
