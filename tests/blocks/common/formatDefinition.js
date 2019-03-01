import {EDIE_PROP_TYPE, EDIE_BLOCK_TYPE, EDIE_PROPS} from '../../../src/blocks/common/formatDefinition';
import {expect} from 'chai';

describe('formatDefinition', function() {
    Object.keys(EDIE_BLOCK_TYPE).forEach((blockType) => {
        it(`${EDIE_BLOCK_TYPE[blockType]}: A definition exits`, function() {
            let bt = EDIE_BLOCK_TYPE[blockType];
            expect(EDIE_PROPS[bt]).is.an('object', `No definition for ${blockType}?`);
            expect(Object.keys(EDIE_PROPS[bt]).length).to.be.above(0);
        });

        it(`${EDIE_BLOCK_TYPE[blockType]}: All props are 'known'`, function() {
            let bt = EDIE_BLOCK_TYPE[blockType]
            Object.keys(EDIE_PROPS[bt]).forEach((propKey) => {
                if ( propKey !== '__selfClosing') {
                    expect(Object.values(EDIE_PROP_TYPE).includes(EDIE_PROPS[bt][propKey].type), `${propKey}: unknown prop type: ${EDIE_PROPS[bt][propKey].type}`).to.be.true;
                }
            });
        });
    });
});
