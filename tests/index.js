import {edie2hbsmjml, edie2hbstext, createEmptyBlock} from '../src';
import {expect} from 'chai';
import sampleEdie from './sample.edie';

describe('createEmptyBlock', function() {
    it('returns empty block ', function() {
        const block = createEmptyBlock();
        expect(block.id).to.not.be.null;
    });
});

describe('edie2mjml', function() {
    it('converting sample to MJML, adds color classes', function() {
        let mjml = edie2hbsmjml(sampleEdie);
        expect(mjml).to.contain('.edie-color-p-FFFF00 { color: #FFFF00 }');
        expect(mjml).to.contain('.edie-color-m-FFFF00 { background-color: #FFFF00 }');
    });

    it('convert sample edie without exceptions', function() {
        edie2hbstext((sampleEdie));
    });
});

describe('edie2text', function() {

    it('convert sample edie without exceptions', function() {
        let text = edie2hbstext((sampleEdie));
        expect(text).to.not.contain('&nbsp;');
    });
});
