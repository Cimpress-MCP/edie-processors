import {buttonToMjml} from '../../src/blocks/button';
import {expect} from 'chai';
import {equalIgnoringNewLines} from '../helpers';

const invalidRenderer = () => {
    throw new Error('Renderer should not be called when rendering buttons');
};

describe('button', function() {
    const fullButton = {
        properties: {
            content: 'caption',
            backgroundColor: '#0f0',
            href: 'http://ab.com',
            align: 'right',
            width: '100px',
            color: '#f00',
            borderSize: '2px',
            borderColor: '#4f5d75',
            borderRadius: '10px',
            padding: '1px 2px',
        },
    };

    const fullButtonInMjml = '<mj-button href="http://ab.com" ' +
        'color="#f00" ' +
        'align="right" ' +
        'width="100px" ' +
        'border-radius="10px" ' +
        'background-color="#0f0" ' +
        'padding="1px 2px" ' +
        'border="2px solid #4f5d75">caption</mj-button>';

    it('buttonToMjml, non-top, mjml generated correctly', function() {
        const mjml = buttonToMjml(fullButton, invalidRenderer, false );
        expect(mjml.trim()).to.equal(fullButtonInMjml);
    });

    it('buttonToMjml, top, mjml generated correctly', function() {
        const mjml = buttonToMjml(fullButton, invalidRenderer, true );

        equalIgnoringNewLines(mjml, `<mj-section padding="0px"><mj-column padding="0px">${fullButtonInMjml}</mj-column></mj-section>`);
    });
});
