const getLoopSectionEndBlock = (x) => {
    let ending = x;
    if (ending.indexOf(' ') !== -1) {
        ending = ending.split(' ')[0];
    }
    return ending;
};

const loopToMjml = (item, blockRenderer, isTopLevelNode) => {
    let items = '';
    (item.children || []).forEach((x) => {
        // NOTE: the loop is a fake element so all children of a loop positioned at top level
        // are also considered at top level.
        items += blockRenderer(x, blockRenderer, isTopLevelNode);
    });

    return '{{#' + item.properties.loopPath + '}}'
        + items
        + '{{/' + getLoopSectionEndBlock(item.properties.loopPath) + '}}';
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
        + '{{/' + getLoopSectionEndBlock(item.properties.loopPath) + '}}\r\n'
        + '\r\n';
};

const loopToCsv = (item, blockRenderer, isTopLevelNode, templateMetadata) => {
    let titles = '';
    let items = '';

    if (templateMetadata.titlesEnabled) {
        (item.children || []).forEach((x) => {
            titles += blockRenderer(x, blockRenderer, isTopLevelNode, templateMetadata);
        });
    }

    (item.children || []).forEach((x) => {
        // make titlesEnabled false so that columnToCsv will consider 'text' and not 'title'
        items += blockRenderer(x, blockRenderer, isTopLevelNode, {...templateMetadata, titlesEnabled: false});
    });

    return titles
        + '{{#' + item.properties.loopPath + '}}\r\n'
        + items
        + '{{/' + getLoopSectionEndBlock(item.properties.loopPath) + '}}'
        + '\r\n';
};

export {
    loopToMjml,
    loopToText,
    loopToCsv,
};
