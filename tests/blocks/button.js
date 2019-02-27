import {buttonToMjml} from '../../src/blocks/button';
import {expect} from 'chai';

const invalidRenderer = () => {
    throw new Error('Renderer should not be called when rendering buttons');
};

describe('button', function() {
    const fullButton = {
        properties: {
            content: 'caption',
            href: 'http://ab.com',
            align: 'right',
            width: '100px',
            borderSize: '2px',
            borderColor: '#4f5d75',
            borderRadius: '10px',
            padding: '1px 2px',
        },
    };

    const fullButtonInMjml = '<mj-button href="http://ab.com" ' +
        'align="right" ' +
        'width="100px" ' +
        'border-radius="10px" ' +
        'padding="1px 2px" ' +
        'border="2px solid #4f5d75">caption</mj-button>';

    it('buttonToMjml, non-top, mjml generated correctly', function() {
        const mjml = buttonToMjml(fullButton, invalidRenderer, false );
        expect(mjml).to.equal(fullButtonInMjml);
    });

    it('buttonToMjml, top, mjml generated correctly', function() {
        const mjml = buttonToMjml(fullButton, invalidRenderer, true );

        expect(mjml).to.equal(`<mj-section padding="0px"><mj-column padding="0px">${fullButtonInMjml}</mj-column></mj-section>`);
    });
});
