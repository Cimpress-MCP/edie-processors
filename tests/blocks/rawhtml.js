import {equalIgnoringNewLines} from '../helpers';
import {rawhtmlToMjml} from '../../src/blocks/rawhtml';

const invalidRenderer = () => {
    throw new Error('Renderer should not be called when rendering buttons');
};

describe('rawhtml', function() {
    const rawhtml = {
        'properties': {
            'content': '<div class="asd">asd</div>',
        }
    };

    it('rawhtnlToMjml, no children, mjml generated correctly', function() {
        const mjml = rawhtmlToMjml(rawhtml, invalidRenderer, false );
        equalIgnoringNewLines(mjml, '<mj-raw ><div class="asd">asd</div></mj-raw>');
    });
});
