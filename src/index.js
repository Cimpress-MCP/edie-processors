import {blockTypes} from './blockTypes';
import {mainToMjml} from './blocks/main';
import {textToMjml} from './blocks/text';
import {rowToMjml} from './blocks/row';
import {columnToMjml} from './blocks/column';
import {buttonToMjml} from './blocks/button';
import {loopToMjml} from './blocks/loop';

const blockToMjml = (item, childrenRenderer) => {
    switch (item.type) {
    case blockTypes.MAIN:
        return mainToMjml(item, childrenRenderer);
    case blockTypes.TEXT:
        return textToMjml(item);
    case blockTypes.ROW:
        return rowToMjml(item, childrenRenderer);
    case blockTypes.COLUMN:
        return columnToMjml(item, childrenRenderer);
    case blockTypes.BUTTON:
        return buttonToMjml(item);
    case blockTypes.LOOP:
        return loopToMjml(item, childrenRenderer);
    default:
        return `Conversion of ${item.type} to MJML not implemented.`;
    }
};

function exportMimeHeadersToMjml(headers) {
    let result = '';
    Object.keys(headers).forEach((k) => {
        result += `<mj-raw><meta name="mime-header-${k}" content="${headers[k]}" /></mj-raw>\r\n`;
    });
    return result;
}

function edie2hbsmjml(edieJson) {
    if (edieJson.formatVersion !== 'v1.0') {
        return 'Not supported version!';
    }

    return `<mjml><mj-head>${exportMimeHeadersToMjml(edieJson.mimeHeaders)}</mj-head>${blockToMjml(edieJson.structure, blockToMjml)}</mjml>`;
}

const emptyStructure = {
    formatVersion: 'v1.0',
    mimeHeaders: {
        to: 'a@b.com',
        subject: 'sample email',
    },
    structure: {
        id: 'main',
        type: 'main',
        children: [],
    },
};

export {
    edie2hbsmjml,
    emptyStructure,
};
