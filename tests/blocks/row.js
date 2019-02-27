import {rowToMjml} from '../../src/blocks/row';
import {equalIgnoringNewLines} from '../helpers';

const invalidRenderer = () => {
    throw new Error('Renderer should not be called when rendering buttons');
};

describe('row', function() {
    const fullrowNoChildren = {
        'properties': {
            'backgroundColor': '#ffffff',
            'padding': '0px',
            'borderColor': '#f00',
            'borderSize': '2px',
        },
        'children': [],
    };

    it('rowToMjml, no children, mjml generated correctly', function() {
        const mjml = rowToMjml(fullrowNoChildren, invalidRenderer, false );
        equalIgnoringNewLines(mjml, '<mj-section padding="0px" background-color="#ffffff" border="2px solid #f00"></mj-section>');
    });
});
