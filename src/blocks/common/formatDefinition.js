import {computeBorder} from './helpers';

const EDIE_BLOCK_TYPE = {
    MAIN: 'main',
    COLUMN: 'column',
    ROW: 'row',
    TEXT: 'text',
    BUTTON: 'button',
    LOOP: 'loop',
    VSPACER: 'vspacer',
    IMAGE: 'image',
};

const EDIE_PROP_TYPE = {
    ATTRIBUTE: 'attribute',
    SKIP: 'skip',
    TRANSLATED: 'translated',
    BODY: 'body',
    COMPUTED: 'computed',
};

const propAsAttribute = () => ({
    type: EDIE_PROP_TYPE.ATTRIBUTE,
});

const propAsBody = () => ({
    type: EDIE_PROP_TYPE.BODY,
});

const propAsSkip = () => ({
    type: EDIE_PROP_TYPE.SKIP,
});

const propTranslated = (mjAttribute) => ({
    type: EDIE_PROP_TYPE.TRANSLATED,
    mjAttribute: mjAttribute,
});

// `func` function must return either 'null' or an object with key and value properties.
const propAsComputed = (func) => ({
    type: EDIE_PROP_TYPE.COMPUTED,
    compute: func,
});

const EDIE_PROPS = {
    [EDIE_BLOCK_TYPE.BUTTON]: {
        href: propAsAttribute(),
        align: propAsAttribute(),
        width: propAsAttribute(),
        borderSize: propAsSkip(),
        borderColor: propAsSkip(),
        borderRadius: propTranslated('border-radius'),
        padding: propAsAttribute(),
        border: propAsComputed(computeBorder),
        content: propAsBody(),
    },
    [EDIE_BLOCK_TYPE.IMAGE]: {
        __selfClosing: true,
        src: propAsAttribute(),
        href: propAsAttribute(),
        alt: propAsAttribute(),
        align: propAsAttribute(),
        width: propAsAttribute(),
        borderSize: propAsSkip(),
        borderColor: propAsSkip(),
        backgroundColor: propTranslated('container-background-color'),
        padding: propAsAttribute(),
        border: propAsComputed(computeBorder),
    },
    [EDIE_BLOCK_TYPE.COLUMN]: {
        width: propAsAttribute(),
        padding: propAsAttribute(),
        backgroundColor: propTranslated('background-color'),
        verticalAlign: propTranslated('vertical-align'),
        borderSize: propAsSkip(),
        borderColor: propAsSkip(),
        border: propAsComputed(computeBorder),
        children: propAsBody(),
    },
    [EDIE_BLOCK_TYPE.ROW]: {
        padding: propAsAttribute(),
        backgroundColor: propTranslated('background-color'),
        borderSize: propAsSkip(),
        borderColor: propAsSkip(),
        border: propAsComputed(computeBorder),
        children: propAsBody(),
        fullWidth: propTranslated('full-width'),
    },
    [EDIE_BLOCK_TYPE.TEXT]: {
        backgroundColor: propTranslated('container-background-color'),
        padding: propAsAttribute(),
        content: propAsBody(),
    },
    [EDIE_BLOCK_TYPE.VSPACER]: {
        __selfClosing: true,
        lineHeight: propTranslated('border-width'),
        lineStyle: propTranslated('border-style'),
        lineColor: propTranslated('border-color'),
        backgroundColor: propTranslated('container-background-color'),
        padding: propAsAttribute(),
    },
    [EDIE_BLOCK_TYPE.MAIN]: {
        emailBackgroundColor: propTranslated('background-color'),
        emailWidth: propTranslated('width'),
        backgroundColor: propAsSkip(),
        children: propAsBody(),
    },
};

export {
    EDIE_BLOCK_TYPE,
    EDIE_PROPS,
    EDIE_PROP_TYPE,
};
