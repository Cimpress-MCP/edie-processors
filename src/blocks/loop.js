const loopToMjml = (item, blockRenderer, isTopLevelNode) => {
    let items = '';
    (item.children || []).forEach((x) => {
        // NOTE: the loop is a fake element so all children of a loop positioned at top level
        // are also considered at top level.
        items += blockRenderer(x, blockRenderer, isTopLevelNode);
    });

    return '{{#' + item.properties.loopPath + '}}'
        + items
        + '{{/' + item.properties.loopPath + '}}';
};

const loopToText = (item, blockRenderer, isTopLevelNode) => {
    let items = '';

    (item.children || []).forEach((x) => {
        // NOTE: the loop is a fake element so all children of a loop positioned at top level
        // are also considered at top level.
        items += blockRenderer(x, blockRenderer, isTopLevelNode);
    });

    return '{{#' + item.properties.loopPath + '}}\r\n'
        + items
        + '{{/' + item.properties.loopPath + '}}\r\n'
        + '\r\n';
};

export {
    loopToMjml,
    loopToText,
};
