import {loopToMjml} from '../../src/blocks/loop';
import {equalIgnoringNewLines} from '../helpers';

const invalidRenderer = () => {
    throw new Error('Renderer should not be called when rendering buttons');
};

describe('loop', function() {
    const fullloopNoChildren = {
        'properties': {
            'loopPath': 'some function',
        },
        'children': [],
    };

    it('loopToMjml, no children, complex loop path, generated correctly', function() {
        const mjml = loopToMjml(fullloopNoChildren, invalidRenderer, false );
        equalIgnoringNewLines(mjml, '{{#some function}}{{/some}}');
    });

    it('loopToMjml, no children, simple loop path, generated correctly', function() {
        let loop = {
            'properties': {
                'loopPath': 'some',
            },
            'children': [],
        };
        const mjml = loopToMjml(loop, invalidRenderer, false );
        equalIgnoringNewLines(mjml, '{{#some}}{{/some}}');
    });
});
