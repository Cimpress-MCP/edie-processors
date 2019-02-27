import {expect} from 'chai';

const equalIgnoringNewLines = (actual, expected) => {
    let a = actual.replace(/\r/g, '').replace(/\n/g, '').trim();
    let b = expected.replace(/\r/g, '').replace(/\n/g, '').trim();
    expect(a).to.equal(b);
};

export {
    equalIgnoringNewLines,
};
