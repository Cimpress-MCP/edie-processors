
const computeBorder = (edieProps) => {
    if (edieProps['borderSize'] && edieProps['borderColor']) {
        return {
            key: 'border',
            value: edieProps['borderSize'] + ' solid ' + edieProps['borderColor'],
        };
    }
    return null;
};


export {
    computeBorder,
};
