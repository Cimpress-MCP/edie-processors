function translateProps(props, translations) {
    let translated = {};
    Object.keys(props).forEach((key) => {
        if (translations[key]) {
            translated[translations[key]] = props[key];
        } else {
            translated[key] = props[key];
        }
    });
    return translated;
}


function propertiesToText(props, keysToIgnore) {
    let properties = '';
    Object.keys(props || {})
        .filter((key) => !(keysToIgnore || []).includes(key))
        .forEach((key) => {
            // TODO FIX: Make sure props[key] is escaped !!!
            properties = properties + ' ' + key + '="' + props[key] + '"';
        });
    return properties;
}


export {
    translateProps,
    propertiesToText,
};
