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
    RAW: 'raw',
    MJML: 'mjml',
    SUB_TEMPLATE: 'subtemplate',
};

const EDIE_PROP_TYPE = {
    //
    // Put the property 'as-as' into mj-* element as property (same name)
    ATTRIBUTE: 'attribute',
    //
    // Do not add this property into mj-* element attribute
    SKIP: 'skip',
    //
    // Add edie property into mj-* element as attribute with different name
    // See propTranslated() for example usage
    TRANSLATED: 'translated',
    //
    // Add the property's value intp mj-*' element's body.
    // Eg. { .., content: 'xxx', ...}  => <mj-*>xxx</mj-*>
    BODY: 'body',
    //
    // Advanced property that needs to computed based on all edie properties
    // See the definition of 'border' property for example
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
        color: propAsAttribute(),
        align: propAsAttribute(),
        width: propAsAttribute(),
        borderSize: propAsSkip(),
        borderColor: propAsSkip(),
        borderRadius: propTranslated('border-radius'),
        backgroundColor: propTranslated('background-color'),
        padding: propAsAttribute(),
        border: propAsComputed(computeBorder),
        content: propAsBody(),
        class: propTranslated('mj-class'),
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
        condition: propAsSkip(),
        conditionAlt: propAsSkip(),
        backgroundColor: propTranslated('container-background-color'),
        padding: propAsAttribute(),
        border: propAsComputed(computeBorder),
        class: propTranslated('mj-class'),
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
        class: propTranslated('mj-class'),
    },
    [EDIE_BLOCK_TYPE.ROW]: {
        padding: propAsAttribute(),
        backgroundColor: propTranslated('background-color'),
        borderSize: propAsSkip(),
        borderColor: propAsSkip(),
        border: propAsComputed(computeBorder),
        children: propAsBody(),
        fullWidth: propTranslated('full-width'),
        class: propTranslated('mj-class'),
    },
    [EDIE_BLOCK_TYPE.TEXT]: {
        backgroundColor: propTranslated('container-background-color'),
        padding: propAsAttribute(),
        content: propAsBody(),
        treatParagraphsAsDiv: propAsSkip(),
        class: propTranslated('mj-class'),
    },
    [EDIE_BLOCK_TYPE.VSPACER]: {
        __selfClosing: true,
        lineHeight: propTranslated('border-width'),
        lineStyle: propTranslated('border-style'),
        lineColor: propTranslated('border-color'),
        backgroundColor: propTranslated('container-background-color'),
        padding: propAsAttribute(),
        class: propTranslated('mj-class'),
    },
    [EDIE_BLOCK_TYPE.MAIN]: {
        padding: propAsAttribute(),
        fullWidth: propTranslated('full-width'),
        class: propTranslated('mj-class'),
        emailBackgroundColor: propTranslated('background-color'),
        emailWidth: propTranslated('width'),
        backgroundColor: propAsSkip(),
        children: propAsBody(),
        //
        // These are marked as 'skipped' because of special handling outside
        // of the scope of MAIN element. Added here for consistency.
        defaultTextLineHeight: propAsSkip(),
        defaultRowPadding: propAsSkip(),
        defaultColumnPadding: propAsSkip(),
        defaultTextPadding: propAsSkip(),
        additionalMjHeadContent: propAsSkip(),
    },
    [EDIE_BLOCK_TYPE.LOOP]: {
        // Loop is a special type of element that has no representation as mj element
        'dummy': propAsSkip(),
    },
    [EDIE_BLOCK_TYPE.RAW]: {
        content: propAsBody(),
    },
    [EDIE_BLOCK_TYPE.SUB_TEMPLATE]: {
        templateUrn: propAsBody(),
        parameters: propAsBody(),
    },
};

export {
    EDIE_BLOCK_TYPE,
    EDIE_PROPS,
    EDIE_PROP_TYPE,
};
