import {columnToMjml} from '../../src/blocks/column';
import {equalIgnoringNewLines} from '../helpers';

const invalidRenderer = () => {
    throw new Error('Renderer should not be called when rendering buttons');
};

describe('column', function() {
    const fullColumnNoChildren = {
        'properties': {
            'width': '50%',
            'backgroundColor': '#ffffff',
            'padding': '0px',
            'borderColor': '#f00',
            'borderSize': '2px',
        },
        'children': [],
    };

    it('columnToMjml, no children, mjml generated correctly', function() {
        const mjml = columnToMjml(fullColumnNoChildren, invalidRenderer, false );
        equalIgnoringNewLines(mjml, '<mj-column width="50%" padding="0px" background-color="#ffffff" border="2px solid #f00"></mj-column>');
    });
});
