import { imageToText, imageToMjml } from '../../src/blocks/image';
import { expect } from 'chai';

describe('image', function () {
    describe('imageToText', function () {
        it('no alt no href returns ![image]()', function () {
            const imageItem = {
                properties: {}
            }
            const text = imageToText(imageItem)
            expect(text).to.equal('![image]()');
        });

        it('alt but no href returns ![{alt}]()', function () {
            const imageItem = {
                properties: {
                    alt: 'horse_image'
                }
            }
            const text = imageToText(imageItem)
            expect(text).to.equal('![horse_image]()');
        });


        it('no alt but href returns ![image]({href})', function () {
            const imageItem = {
                properties: {
                    href: 'horse_image_url'
                }
            }
            const text = imageToText(imageItem)
            expect(text).to.equal('![image](horse_image_url)');
        });

        it('alt and href returns ![{alt}]({href})', function () {
            const imageItem = {
                properties: {
                    alt: 'image of a horse',
                    href: 'route_to_horse'
                }
            }
            const text = imageToText(imageItem)
            expect(text).to.equal('![image of a horse](route_to_horse)');
        });
    });

    describe('imageToMjml', function () {
        it('mjml generated correctly', function () {
            const imageItem = {
                properties: {
                    src: 'url_to_horse_image',
                    alt: 'image of a horse',
                    href:'route_to_horse',
                    width: '100%'
                }
            }
            const mjml = imageToMjml(imageItem)
            expect(mjml).to.equal('<mj-image src="url_to_horse_image" alt="image of a horse" href="route_to_horse" width="100%" />');
        });

    });
});
