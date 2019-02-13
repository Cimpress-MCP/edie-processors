import * as uuidv1 from 'uuid/v1';
import {EDIE_BLOCK_TYPE} from './blocks/common/base';
import {mainToMjml, mainTotext} from './blocks/main';
import {textToMjml, textToText} from './blocks/text';
import {rowToMjml, rowToText} from './blocks/row';
import {columnToMjml, columnToText} from './blocks/column';
import {buttonToMjml, buttonToText} from './blocks/button';
import {loopToMjml, loopToText} from './blocks/loop';

const blockToMjml = (item, childrenRenderer) => {
    switch (item.type) {
    case EDIE_BLOCK_TYPE.MAIN:
        return mainToMjml(item, childrenRenderer);
    case EDIE_BLOCK_TYPE.TEXT:
        return textToMjml(item);
    case EDIE_BLOCK_TYPE.ROW:
        return rowToMjml(item, childrenRenderer);
    case EDIE_BLOCK_TYPE.COLUMN:
        return columnToMjml(item, childrenRenderer);
    case EDIE_BLOCK_TYPE.BUTTON:
        return buttonToMjml(item);
    case EDIE_BLOCK_TYPE.LOOP:
        return loopToMjml(item, childrenRenderer);
    default:
        return `Conversion of ${item.type} to MJML not implemented.`;
    }
};

const blockToText = (item, childrenRenderer) => {
    switch (item.type) {
    case EDIE_BLOCK_TYPE.MAIN:
        return mainTotext(item, childrenRenderer);
    case EDIE_BLOCK_TYPE.TEXT:
        return textToText(item);
    case EDIE_BLOCK_TYPE.ROW:
        return rowToText(item, childrenRenderer);
    case EDIE_BLOCK_TYPE.COLUMN:
        return columnToText(item, childrenRenderer);
    case EDIE_BLOCK_TYPE.BUTTON:
        return buttonToText(item);
    case EDIE_BLOCK_TYPE.LOOP:
        return loopToText(item, childrenRenderer);
    default:
        return `Conversion of ${item.type} to TEXT not implemented.`;
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

function edie2hbstext(edieJson) {
    if (edieJson.formatVersion !== 'v1.0') {
        return 'Not supported version!';
    }

    return blockToText(edieJson.structure, blockToText);
}

const createEmptyFormat = (v) => {
    if (v && v !== 'v1.0') {
        return null;
    }

    return {
        formatVersion: v || 'v1.0',
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
};


function createEmptyBlock(type) {
    let props = {};
    switch (type) {
    case EDIE_BLOCK_TYPE.BUTTON:
        props = {
            backgroundColor: '#188ec5',
            color: '#ffffff',
            textAlign: 'center',
            borderSize: '0px',
            borderColor: 'transparent',
        };
        break;

    case EDIE_BLOCK_TYPE.COLUMN:
        props = {
            width: '100%',
        };
        break;

    default:
        break;
    }

    return {
        id: uuidv1(),
        type: type,
        properties: props,
        children: [EDIE_BLOCK_TYPE.ROW, EDIE_BLOCK_TYPE.COLUMN, EDIE_BLOCK_TYPE.LOOP].includes(type) ? [] : null,
    };
}

export {
    EDIE_BLOCK_TYPE,
    edie2hbsmjml,
    edie2hbstext,
    createEmptyBlock,
    createEmptyFormat,
};
