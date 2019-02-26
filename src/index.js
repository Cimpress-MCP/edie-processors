import uuidv1 from 'uuid/v1';
import {EDIE_BLOCK_TYPE} from './blocks/common/base';
import {mainToMjml, mainTotext} from './blocks/main';
import {extractColorClasses, textToMjml, textToText} from './blocks/text';
import {rowToMjml, rowToText} from './blocks/row';
import {columnToMjml, columnToText} from './blocks/column';
import {buttonToMjml, buttonToText} from './blocks/button';
import {loopToMjml, loopToText} from './blocks/loop';
import {vspacerToMjml, vspacerToText} from './blocks/vspacer';
import {imageToMjml, imageToText} from './blocks/image';

const blockToMjml = (item, childrenRenderer, isTopLevelNode) => {
    let renderer = null;
    switch (item.type) {
    case EDIE_BLOCK_TYPE.MAIN:
        renderer = mainToMjml;
        break;
    case EDIE_BLOCK_TYPE.TEXT:
        renderer = textToMjml;
        break;
    case EDIE_BLOCK_TYPE.ROW:
        renderer = rowToMjml;
        break;
    case EDIE_BLOCK_TYPE.COLUMN:
        renderer = columnToMjml;
        break;
    case EDIE_BLOCK_TYPE.BUTTON:
        renderer = buttonToMjml;
        break;
    case EDIE_BLOCK_TYPE.LOOP:
        renderer = loopToMjml;
        break;
    case EDIE_BLOCK_TYPE.VSPACER:
        renderer = vspacerToMjml;
        break;
    case EDIE_BLOCK_TYPE.IMAGE:
        renderer = imageToMjml;
        break;
    default:
        return `Conversion of ${item.type} to MJML not implemented.`;
    }
    return renderer(item, childrenRenderer, isTopLevelNode);
};

const blockToText = (item, childrenRenderer, isTopLevelNode) => {
    let renderer = null;
    switch (item.type) {
    case EDIE_BLOCK_TYPE.MAIN:
        renderer = mainTotext;
        break;
    case EDIE_BLOCK_TYPE.TEXT:
        renderer = textToText;
        break;
    case EDIE_BLOCK_TYPE.ROW:
        renderer = rowToText;
        break;
    case EDIE_BLOCK_TYPE.COLUMN:
        renderer = columnToText;
        break;
    case EDIE_BLOCK_TYPE.BUTTON:
        renderer = buttonToText;
        break;
    case EDIE_BLOCK_TYPE.LOOP:
        renderer = loopToText;
        break;
    case EDIE_BLOCK_TYPE.VSPACER:
        renderer = vspacerToText;
        break;
    case EDIE_BLOCK_TYPE.IMAGE:
        renderer = imageToText;
        break;
    default:
        return `Conversion of ${item.type} to TEXT not implemented.`;
    }
    return renderer(item, childrenRenderer, isTopLevelNode);
};

function edie2hbsmjml(edieJson) {
    if (edieJson.formatVersion !== 'v1.0') {
        return 'Not supported version!';
    }

    let defaultBackground = edieJson.structure.properties.backgroundColor || '#ffffff';

    let mjml = blockToMjml(edieJson.structure, blockToMjml, true);
    let colorClasses = extractColorClasses(mjml);
    let styles = '';
    Object.keys(colorClasses.pen).forEach((penClass) => {
        styles += `      .${penClass} { color: #${colorClasses.pen[penClass]} }\r\n`;
    });
    Object.keys(colorClasses.marker).forEach((markerClass) => {
        styles += `      .${markerClass} { background-color: #${colorClasses.marker[markerClass]} }\r\n`;
    });

    return `<mjml>
<mj-head>
    <mj-style inline="inline">
      .text-tiny { font-size: .7em; } 
      .text-small { font-size: .85em; } 
      .text-big { font-size: 1.4em; } 
      .text-huge { font-size: 1.8em; }
      figure.image { margin: 0; }
      figure.image img { width: 100%; margin: 0; }
      figure.image.image-style-align-left { margin-left: 0; }
      figure.image.image-style-align-left img { max-width: 50%; float: left; margin-right: 1.5em; }
      figure.image.image-style-align-right { margin-right: 0; }
      figure.image.image-style-align-right img { max-width: 50%; float: right; margin-left: 1.5em; }
      ${styles}
    </mj-style>
    <mj-attributes>
        <mj-section background-color="${defaultBackground}" padding="0px"/>
        <mj-column padding="5px"/>
        <mj-text padding="5px"/>
    </mj-attributes>
</mj-head>
${mjml}
</mjml>`;
}

function edie2hbstext(edieJson) {
    if (edieJson.formatVersion !== 'v1.0') {
        return 'Not supported version!';
    }

    return blockToText(edieJson.structure, blockToText, true);
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

    case EDIE_BLOCK_TYPE.TEXT:
        props = {
        };
        break;

    case EDIE_BLOCK_TYPE.ROW:
        props = {
        };
        break;

    case EDIE_BLOCK_TYPE.COLUMN:
        props = {
            width: '100%',
        };
        break;

    case EDIE_BLOCK_TYPE.VSPACER:
        props = {
            backgroundColor: '#188ec5',
            height: '2px',
        };
        break;
    case EDIE_BLOCK_TYPE.IMAGE:
        props = {
            width: '',
            src: '',
            alt: '',
            href: '',
            backgroundColor: '#ffffff',
            align: 'center',
            borderSize: '0px',
            borderColor: '#ffffff',
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
