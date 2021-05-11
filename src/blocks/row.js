import {toMjml} from './common/base';
import {EDIE_BLOCK_TYPE, EDIE_PROPS} from './common/formatDefinition';

const rowToMjml = (item, blockRenderer, isTopLevelNode) => {
    let items = '';
    (item.children || []).forEach((x) => {
        items += blockRenderer(x, blockRenderer, false);
    });

    item.properties.children = items;

    return toMjml('mj-section', item.properties, EDIE_PROPS[EDIE_BLOCK_TYPE.ROW]);
};

const rowToText = (item, blockRenderer, isTopLevelNode) => {
    let result = '';
    (item.children || []).forEach((x) => {
        // Note: All children of a row are NOT top level elements
        result += blockRenderer(x, blockRenderer, false);
    });
    return result + '\r\n';
};

const rowToCsv = (item, blockRenderer, isTopLevelNode, templateMetadata) => {
    let result = '';
    (item.children || []).forEach((x, index) => {
        // Note: All children of a row are NOT top level elements
        result += blockRenderer(x, blockRenderer, false, templateMetadata);
        result += index === item.children.length - 1 ? '' : templateMetadata.xCsvSeparator;
    });
    return result + '\n';
};

export {
    rowToMjml,
    rowToText,
    rowToCsv,
};
