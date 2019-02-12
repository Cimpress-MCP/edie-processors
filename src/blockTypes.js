import * as uuidv1 from 'uuid/v1';

const blockTypes = {
    MAIN: 'main',
    COLUMN: 'column',
    ROW: 'row',
    TEXT: 'text',
    BUTTON: 'button',
    LOOP: 'loop',
};

function createEmpty(type) {
    let props = {};
    switch (type) {
    case blockTypes.BUTTON:
        props = {
            backgroundColor: '#188ec5',
            color: '#ffffff',
            textAlign: 'center',
            borderSize: '0px',
            borderColor: 'transparent',
        };
        break;

    case blockTypes.COLUMN:
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
        children: [blockTypes.ROW, blockTypes.COLUMN, blockTypes.LOOP].includes(type) ? [] : null,
    };
}

export {
    blockTypes,
    createEmpty,
};
