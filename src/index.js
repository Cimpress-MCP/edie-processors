import uuidv1 from 'uuid/v1';
import {EDIE_BLOCK_TYPE} from './blocks/common/formatDefinition';
import {mainToCsv, mainToMjml, mainTotext} from './blocks/main';
import {extractColorClasses, textToMjml, textToText} from './blocks/text';
import {rowToCsv, rowToMjml, rowToText} from './blocks/row';
import {columnToCsv, columnToMjml, columnToText} from './blocks/column';
import {buttonToMjml, buttonToText} from './blocks/button';
import {loopToCsv, loopToMjml, loopToText} from './blocks/loop';
import {vspacerToMjml, vspacerToText} from './blocks/vspacer';
import {imageToMjml, imageToText} from './blocks/image';
import {mjmlToText, mjmlToMjml} from './blocks/mjml';
import {rawToMjml, rawToText} from './blocks/raw';
import {currentVersion, supportedVersions} from './versions';
import {subtemplateToMjml, subtemplateToText} from './blocks/subtemplate';

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
    case EDIE_BLOCK_TYPE.MJML:
        renderer = mjmlToMjml;
        break;
    case EDIE_BLOCK_TYPE.RAW:
        renderer = rawToMjml;
        break;
    case EDIE_BLOCK_TYPE.SUB_TEMPLATE:
        renderer = subtemplateToMjml;
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
    case EDIE_BLOCK_TYPE.MJML:
        renderer = mjmlToText;
        break;
    case EDIE_BLOCK_TYPE.RAW:
        renderer = rawToText;
        break;
    case EDIE_BLOCK_TYPE.SUB_TEMPLATE:
        renderer = subtemplateToText;
        break;
    default:
        return `Conversion of ${item.type} to TEXT not implemented.`;
    }
    return renderer(item, childrenRenderer, isTopLevelNode);
};

const blockToCsv = (item, childrenRenderer, isTopLevelNode, templateMetadata) => {
    let renderer = null;
    switch (item.type) {
    case EDIE_BLOCK_TYPE.MAIN:
        renderer = mainToCsv;
        break;
    case EDIE_BLOCK_TYPE.ROW:
        renderer = rowToCsv;
        break;
    case EDIE_BLOCK_TYPE.LOOP:
        renderer = loopToCsv;
        break;
    case EDIE_BLOCK_TYPE.COLUMN:
        renderer = columnToCsv;
        break;
    default:
        return `Conversion of ${item.type} to CSV not implemented.`;
    }
    return renderer(item, childrenRenderer, isTopLevelNode, templateMetadata);
};

function computeDefaultMjAttributes(edieJson) {
    let defaultBackground = edieJson.structure.properties.backgroundColor || '#ffffff';
    let defaultRowPadding = edieJson.structure.properties.defaultRowPadding || '0px';
    let defaultColumnPadding = edieJson.structure.properties.defaultColumnPadding || '5px';
    let defaultTextPadding = edieJson.structure.properties.defaultTextPadding || '5px';
    let defaultTextLineHeight = edieJson.structure.properties.defaultTextLineHeight || '18px';

    return `<mj-attributes>
        <mj-section background-color="${defaultBackground}" padding="${defaultRowPadding}"/>
        <mj-column padding="${defaultColumnPadding}"/>
        <mj-text padding="${defaultTextPadding}" line-height="${defaultTextLineHeight}"/>
    </mj-attributes>
`;
}

function computeDefaultMjStyles(mjml) {
    let colorClasses = extractColorClasses(mjml);
    let styles = '';
    Object.keys(colorClasses.pen).forEach((penClass) => {
        styles += `      .${penClass} { color: #${colorClasses.pen[penClass]} }\r\n`;
    });
    Object.keys(colorClasses.marker).forEach((markerClass) => {
        styles += `      .${markerClass} { background-color: #${colorClasses.marker[markerClass]} }\r\n`;
    });

    return `<mj-style inline="inline">
        .text-tiny { font-size: .7em; }
        .text-small { font-size: .85em; }
        .text-big { font-size: 1.4em; }
        .text-huge { font-size: 1.8em; }
        .page-break { page-break-after: always; }
        figure.image { margin: 0; }
        figure.image img { width: 100%; margin: 0; }
        figure.image.image-style-align-left { margin-left: 0; }
        figure.image.image-style-align-left img { max-width: 50%; float: left; margin-right: 1.5em; }
        figure.image.image-style-align-right { margin-right: 0; }
        figure.image.image-style-align-right img { max-width: 50%; float: right; margin-left: 1.5em; }
        ${styles}
    </mj-style>
`;
}

function computeMjHead(edieJson, mjml, additionalMjHeadContent) {
    return `<mj-head>
        ${computeDefaultMjStyles(mjml)}
        ${computeDefaultMjAttributes(edieJson)}
        ${additionalMjHeadContent ? additionalMjHeadContent : ''}
    </mj-head>`;
}

function edie2hbsmjml(edieJson) {
    if (!supportedVersions.includes(edieJson.formatVersion)) {
        return 'Not supported version!';
    }

    let mjml = blockToMjml(edieJson.structure, blockToMjml, true);
    let mjHead = computeMjHead(edieJson, mjml, edieJson.structure.properties.additionalMjHeadContent);

    if (edieJson.structure.properties.isPartialTemplate) return mjml;

    return `<mjml>
        ${mjHead}
        ${mjml}
    </mjml>`;
}

function edie2hbstext(edieJson) {
    if (!supportedVersions.includes(edieJson.formatVersion)) {
        return 'Not supported version!';
    }

    return blockToText(edieJson.structure, blockToText, true);
}

function edie2hbscsv(edieJson) {
    if (!supportedVersions.includes(edieJson.formatVersion)) {
        return 'Not supported version!';
    }

    return blockToCsv(edieJson.structure, blockToCsv, true, edieJson.meta);
}

const createEmptyFormat = (v) => {
    if (v && !supportedVersions.includes(v)) {
        return null;
    }

    return {
        formatVersion: v || currentVersion,
        mimeHeaders: {
            to: 'a@b.com',
            subject: 'sample email',
        },
        structure: {
            id: 'main',
            type: 'main',
            children: [],
            properties: {
                additionalMjHeadContent: '',
            },
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
            content: 'Button',
            padding: '5px',
        };
        break;

    case EDIE_BLOCK_TYPE.TEXT:
        props = {
            content: '',
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
            lineColor: '#188ec5',
            lineHeight: '2px',
            lineStyle: 'solid',
            padding: '0px',
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
    case EDIE_BLOCK_TYPE.MJML:
    case EDIE_BLOCK_TYPE.RAW:
        props = {
        };
        break;
    case EDIE_BLOCK_TYPE.SUB_TEMPLATE:
        props = {
            templateUrn: '',
            parameters: {},
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
    edie2hbscsv,
    createEmptyBlock,
    createEmptyFormat,
};
