const subtemplateToMjml = (item, blockRenderer, isTopLevelNode) => {
    if (!item.properties.templateUrn) return '';
    let partialTemplate = `{{> "${item.properties.templateUrn}" `;
    let parameters = item.properties.parameters || {};
    for (const key in parameters) {
        if (parameters[key]) {
            partialTemplate += `${key}="${parameters[key]}" `;
        }
    }
    return partialTemplate + '}}';
};

const subtemplateToText = (item, blockRenderer, isTopLevelNode) => {
    if (!item.properties.templateUrn) return '';
    let partialTemplate = `{{> "${item.properties.templateUrn}" `;
    let parameters = item.properties.parameters || {};
    for (const key in parameters) {
        if (parameters[key]) {
            partialTemplate += `${key}="${parameters[key]}" `;
        }
    }
    return partialTemplate + '}}' + '\r\n';
};

export {
    subtemplateToText,
    subtemplateToMjml,
};
