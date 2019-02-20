import {extractColorClasses, textToMjml} from '../../src/blocks/text';
import {expect} from 'chai';

describe('text', function() {
    it('extractColorClasses returns unique classes', function() {
        let cc = extractColorClasses('<p>An order has been routed to fulfiller&nbsp;<span class="placeholder ck-widget" contenteditable="false">name</span>​​​​​​​</p><p>name. ' +
            'It is <mark class="edie-color-p-F0563A">required</mark> to ' +
            'It is <mark class="edie-color-p-F0563B">required</mark> to ' +
            'It is <mark class="edie-color-p-F0563B">required</mark> to ' +
            '<mark class="edie-color-m-FFFF00">either</mark> confirm this order, or reject it.</p>');

        expect(cc).to.deep.equal({
            'marker': {
                'edie-color-m-FFFF00': 'FFFF00',
            },
            'pen': {
                'edie-color-p-F0563A': 'F0563A',
                'edie-color-p-F0563B': 'F0563B',
            },
        });
    });

    it('text2mjml converts <mark/> elements', function() {
        let cc = textToMjml({properties: {content:'<p>An order has been routed to fulfiller&nbsp;<span class="placeholder ck-widget" contenteditable="false">name</span>​​​​​​​</p><p>name. ' +
            'It is <mark class="edie-color-p-F0563A">required</mark> to ' +
            'It is <mark class="edie-color-p-F0563B">required</mark> to ' +
            'It is <mark class="edie-color-p-F0563B">required</mark> to ' +
            '<mark class="edie-color-m-FFFF00">either</mark> confirm this order, or reject it.</p>'}});

        expect(cc).to.not.contain('<mark');
        expect(cc).to.not.contain('</mark');
        expect(cc).to.contain('<span class="edie-color-p-F0563B">required</span>');
    });
});
