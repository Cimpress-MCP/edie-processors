import {equalIgnoringNewLines} from '../helpers';
import {rawToMjml} from '../../src/blocks/raw';

const invalidRenderer = () => {
    throw new Error('Renderer should not be called when rendering buttons');
};

describe('raw', function() {
    const raw = {
        'properties': {
            'content': '<div class="asd">asd</div>',
        },
    };

    it('rawhtnlToMjml, no children, mjml generated correctly', function() {
        const mjml = rawToMjml(raw, invalidRenderer, false );
        equalIgnoringNewLines(mjml, '<mj-raw ><div class="asd">asd</div></mj-raw>');
    });
});
