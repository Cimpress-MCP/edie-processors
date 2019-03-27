import {imageToText, imageToMjml} from '../../src/blocks/image';
import {expect} from 'chai';
import {equalIgnoringNewLines} from '../helpers';

describe('image', function() {
    describe('imageToText', function() {
        it('no alt no href returns Image\r\n[]\r\n', function() {
            const imageItem = {
                properties: {},
            };
            const text = imageToText(imageItem);
            expect(text).to.equal('Image\r\n');
        });

        it('alt but no href returns {alt}\r\n', function() {
            const imageItem = {
                properties: {
                    alt: 'horse_image',
                },
            };
            const text = imageToText(imageItem);
            expect(text).to.equal('horse_image\r\n');
        });


        it('no alt but href returns Image\r\n{href}\r\n', function() {
            const imageItem = {
                properties: {
                    href: 'horse_image_url',
                },
            };
            const text = imageToText(imageItem);
            expect(text).to.equal('Image\r\n[horse_image_url]\r\n');
        });

        it('alt and href returns {alt}\r\n{href}\r\n', function() {
            const imageItem = {
                properties: {
                    alt: 'image of a horse',
                    href: 'route_to_horse',
                },
            };
            const text = imageToText(imageItem);
            expect(text).to.equal('image of a horse\r\n[route_to_horse]\r\n');
        });
    });

    describe('imageToMjml', function() {

        it('with condition, renders correctly', function() {
            const imageItem = {
                properties: {
                    src: 'abc:{{x.asd}}',
                    alt: 'image of a horse',
                    href: 'route_to_horse',
                    width: '100%',
                    borderSize: '0px',
                    borderColor: '#4f5d75',
                    condition: 'x abc',
                    conditionAlt: 'n/a',
                },
            };
            const mjml = imageToMjml(imageItem);
            equalIgnoringNewLines(mjml, '{{#x}}<mj-image src="abc:{{x.asd}}" href="route_to_horse" alt="image of a horse" width="100%" border="0px solid #4f5d75"/>{{else}}<mj-text >n/a</mj-text>{{/x}');
        });

        it('mjml generated correctly', function() {
            const imageItem = {
                properties: {
                    src: 'url_to_horse_image',
                    alt: 'image of a horse',
                    href: 'route_to_horse',
                    width: '100%',
                    borderSize: '0px',
                    borderColor: '#4f5d75',
                },
            };
            const mjml = imageToMjml(imageItem);
            equalIgnoringNewLines(mjml, '<mj-image src="url_to_horse_image" href="route_to_horse" alt="image of a horse" width="100%" border="0px solid #4f5d75"/>');
        });
    });
});
