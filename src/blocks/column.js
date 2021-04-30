import {toMjml} from './common/base';
import {EDIE_BLOCK_TYPE, EDIE_PROPS} from './common/formatDefinition';

const columnToMjml = (item, blockRenderer, isTopLevelNode) => {
    let items = '';
    (item.children || []).forEach((x) => {
        items += blockRenderer(x, blockRenderer, false);
    });

    item.properties.children = items;

    return toMjml('mj-column', item.properties, EDIE_PROPS[EDIE_BLOCK_TYPE.COLUMN]);
};

const columnToText = (item, childrenRenderer, isTopLevelNode) => {
    let result = '';
    (item.children || []).forEach((x) => {
        result += childrenRenderer(x, childrenRenderer);
    });
    return result + '\r\n';
};

const columnToCsv = (item, childrenRenderer, isTopLevelNode, templateMetadata) => {
    let result = '';
    let content = templateMetadata.titlesEnabled ? item.properties.metadata.title : item.properties.metadata.text;
    result += '"' + content + '"';
    return result;
};

export {
    columnToMjml,
    columnToText,
    columnToCsv,
};
