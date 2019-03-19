import {edie2hbsmjml, edie2hbstext, createEmptyBlock} from '../src';
import {expect} from 'chai';
import sampleEdie from './sample.edie';

describe('createEmptyBlock', function() {
    it('returns empty block ', function() {
        const block = createEmptyBlock();
        expect(block.id).to.not.be.null;
    });
});

describe('edie2mjml', function() {
    it('converting sample to MJML, %-based width', function() {
        let edie = JSON.parse(JSON.stringify(sampleEdie));
        edie.structure.properties.emailWidth = '80%';
        let mjml = edie2hbsmjml(edie);
        let expectedMjml = `<mjml>
<mj-head>
    <mj-style inline="inline">
      .text-tiny { font-size: .7em; } 
      .text-small { font-size: .85em; } 
      .text-big { font-size: 1.4em; } 
      .text-huge { font-size: 1.8em; }
      figure.image { margin: 0; }
      figure.image img { width: 100%; margin: 0; }
      figure.image.image-style-align-left { margin-left: 0; }
      figure.image.image-style-align-left img { max-width: 50%; float: left; margin-right: 1.5em; }
      figure.image.image-style-align-right { margin-right: 0; }
      figure.image.image-style-align-right img { max-width: 50%; float: right; margin-left: 1.5em; }
            .edie-color-p-FFFF00 { color: #FFFF00 }
      .edie-color-m-FFFF00 { background-color: #FFFF00 }

    </mj-style>
    <mj-attributes>
        <mj-section background-color="#ffffff" padding="42px"/>
        <mj-column padding="24px"/>
        <mj-text padding="13px" line-height="17px"/>
    </mj-attributes>
</mj-head>
<mj-body background-color="#4f5d75" width="80%">
<mj-section ><mj-column width="50%" padding="0" background-color="#ffffff"><mj-text container-background-color="#ffffff"><p><strong>SUPPLIER</strong></p><p>{{fulfiller.name}}</p></mj-text>
</mj-column>
<mj-column width="50%" background-color="#ffffff"><mj-text ><p style="text-align:right;"><strong>REASON FOR REQUIREMENT</strong></p><p style="text-align:right;"><strong>Order Number:&nbsp;</strong>{{order.orderId}}</p><p style="text-align:right;">{{order.customs-details.consigneeAddress.country}}</p></mj-text>
</mj-column>
</mj-section>
<mj-section padding="0px" ><mj-column padding="0px"><mj-text ><p><strong>ORDER ID:</strong></p><p>{{order.orderId}}</p></mj-text>
</mj-column></mj-section>
<mj-section padding="0px" background-color="#ffffff"><mj-column padding="0px"><mj-text container-background-color="#ffffff"><p><strong>EXPECTED SHIP DATE:</strong></p><p>{{moment (moment createdDate add=60480000) 'DD-MMM-YYYY'}}</p></mj-text>
</mj-column></mj-section>
<mj-section ><mj-column width="40%"><mj-text ><p><strong>PRODUCT</strong></p></mj-text>
</mj-column>
<mj-column width="10%"><mj-text ><p style="text-align:right;"><strong>QUANTITY</strong></p></mj-text>
</mj-column>
<mj-column width="25%"><mj-text ><p style="text-align:right;"><strong>UNIT COST</strong></p></mj-text>
</mj-column>
<mj-column width="25%"><mj-text ><p style="text-align:right;"><strong>TOTAL</strong></p></mj-text>
</mj-column>
</mj-section>
<mj-section padding="0px" ><mj-column padding="0px"><mj-text ><p style="text-align:center;">{{#markdown}}---{{/markdown}}</p></mj-text>
</mj-column></mj-section>
{{#items}}<mj-section ><mj-column width="40%"><mj-text ><p>{{product.name}}</p></mj-text>
</mj-column>
<mj-column width="10%"><mj-text ><p style="text-align:right;">{{orderedQuantity}}</p></mj-text>
</mj-column>
<mj-column width="25%"><mj-text ><p style="text-align:right;">{{#if pricing-information.tradePrice.price}}{{toFixed (divide pricing-information.tradePrice.price orderedQuantity) 2}}{{else}}N/A{{/if}}</p></mj-text>
</mj-column>
<mj-column width="25%"><mj-text ><p style="text-align:right;">{{#if pricing-information.tradePrice.price}}{{toFixed pricing-information.tradePrice.price}}{{pricing-information.tradePrice.currencyCode}}{{else}}N/A{{/if}}</p></mj-text>
</mj-column>
</mj-section>
<mj-section padding="0px" ><mj-column padding="0px"><mj-text ><p><strong>Attributes</strong></p></mj-text>
</mj-column></mj-section>
{{#product.attributes}}<mj-section ><mj-column width="50%"><mj-text ><p>{{name}}</p></mj-text>
</mj-column>
<mj-column width="50%"><mj-text ><p>{{value}}</p></mj-text>
</mj-column>
</mj-section>
{{/product.attributes}}<mj-section padding="0px" ><mj-column padding="0px"><mj-text ><p class="edie-color-p-FFFF00">Artwork link: <a href="https://uiwrap.trdlnk.cimpress.io/?utm_source=puremail&amp;utm_medium=email&amp;utm_campaign=order_request&amp;utm_content=text&amp;url={{links.document.href}}">click to download</a></p><p>Shipping address: <a href="https://uiwrap.trdlnk.cimpress.io/?method=POST&amp;url=https://stereotype.trdlnk.cimpress.io/v1/templates/FOMA%20Order%20Address%20as%20Html/materializations&amp;body=%7B%22links%22%3A%7B%22self%22%3A%7B%22href%22%3A%22{{order.links.self.href}}%22%7D%7D%7D&amp;filename={{order.orderId}}-shipping-address.html&amp;headers={%22accept%22:%22text/html%22}">click to download</a></p><p style="text-align:center;">{{#markdown}}---{{/markdown}}</p></mj-text>
</mj-column></mj-section>
{{/items}}<mj-section ><mj-column width="80%"><mj-text ><p style="text-align:right;" class="edie-color-m-FFFF00"><strong>TOTAL COST</strong></p></mj-text>
</mj-column>
<mj-column width="20%"><mj-text ><p style="text-align:right;">{{toFixed (sum (pluck items 'pricing-information.tradePrice.price')) 2}}</p></mj-text>
</mj-column>
</mj-section>
<mj-section ><mj-column ><mj-button color="#ffffff" width="200px" background-color="#35ad96" border="0px solid #127769">ACCEPT</mj-button>
<mj-image src="path_to_horse" href="horse_website" alt="Image of a horse" width="100%" border="0px solid #4f5d75"/>
</mj-column>
<mj-column ><mj-button color="#ffffff" width="200px" background-color="#f0563a" border="2px solid #a9d6e5">REJECT</mj-button>
</mj-column>
<mj-column ><mj-button color="#ffffff" width="200px" background-color="#006f8a" border="0px solid #4f5d75">ORDER SHIPPED</mj-button>
</mj-column>
</mj-section>
<mj-section padding="0px" ><mj-column padding="0px"><mj-text ><p style="text-align:center;"><span class="text-huge"><strong>Contact National Pen</strong></span></p></mj-text>
</mj-column></mj-section>
<mj-section ><mj-column width="33%"></mj-column>
<mj-column width="34%"><mj-button color="#ffffff" width="200px" background-color="#697582">STOCK</mj-button>
<mj-button color="#ffffff" width="200px" background-color="#697582">DELIVERY</mj-button>
<mj-button color="#ffffff" width="200px" background-color="#697582">ARTWORK</mj-button>
<mj-button color="#ffffff" width="200px" background-color="#697582">QUALITY</mj-button>
</mj-column>
<mj-column width="33%"></mj-column>
</mj-section>
</mj-body>
</mjml>`;

        expect(mjml).to.contain('.edie-color-p-FFFF00 { color: #FFFF00 }');
        expect(mjml).to.contain('.edie-color-m-FFFF00 { background-color: #FFFF00 }');

        mjml = mjml.replace(/\r/g, '').replace(/\n/g, '');
        expectedMjml = expectedMjml.replace(/\n/g, '').replace(/\r/g, '');
        expect(mjml).to.equal(expectedMjml);
    });

    it('converting sample to MJML, px-based width', function() {
        let edie = JSON.parse(JSON.stringify(sampleEdie));
        edie.structure.properties.emailWidth = '700px';
        let mjml = edie2hbsmjml(edie);

        let expectedMjml = `<mjml>
<mj-head>
    <mj-style inline="inline">
      .text-tiny { font-size: .7em; } 
      .text-small { font-size: .85em; } 
      .text-big { font-size: 1.4em; } 
      .text-huge { font-size: 1.8em; }
      figure.image { margin: 0; }
      figure.image img { width: 100%; margin: 0; }
      figure.image.image-style-align-left { margin-left: 0; }
      figure.image.image-style-align-left img { max-width: 50%; float: left; margin-right: 1.5em; }
      figure.image.image-style-align-right { margin-right: 0; }
      figure.image.image-style-align-right img { max-width: 50%; float: right; margin-left: 1.5em; }
            .edie-color-p-FFFF00 { color: #FFFF00 }
      .edie-color-m-FFFF00 { background-color: #FFFF00 }

    </mj-style>
    <mj-attributes>
        <mj-section background-color="#ffffff" padding="42px"/>
        <mj-column padding="24px"/>
        <mj-text padding="13px" line-height="17px"/>
    </mj-attributes>
</mj-head>
<mj-body width="700px">
<mj-wrapper padding="0px" full-width="full-width" background-color="#4f5d75">
<mj-section ><mj-column width="50%" padding="0" background-color="#ffffff"><mj-text container-background-color="#ffffff"><p><strong>SUPPLIER</strong></p><p>{{fulfiller.name}}</p></mj-text>
</mj-column>
<mj-column width="50%" background-color="#ffffff"><mj-text ><p style="text-align:right;"><strong>REASON FOR REQUIREMENT</strong></p><p style="text-align:right;"><strong>Order Number:&nbsp;</strong>{{order.orderId}}</p><p style="text-align:right;">{{order.customs-details.consigneeAddress.country}}</p></mj-text>
</mj-column>
</mj-section>
<mj-section padding="0px" ><mj-column padding="0px"><mj-text ><p><strong>ORDER ID:</strong></p><p>{{order.orderId}}</p></mj-text>
</mj-column></mj-section>
<mj-section padding="0px" background-color="#ffffff"><mj-column padding="0px"><mj-text container-background-color="#ffffff"><p><strong>EXPECTED SHIP DATE:</strong></p><p>{{moment (moment createdDate add=60480000) 'DD-MMM-YYYY'}}</p></mj-text>
</mj-column></mj-section>
<mj-section ><mj-column width="40%"><mj-text ><p><strong>PRODUCT</strong></p></mj-text>
</mj-column>
<mj-column width="10%"><mj-text ><p style="text-align:right;"><strong>QUANTITY</strong></p></mj-text>
</mj-column>
<mj-column width="25%"><mj-text ><p style="text-align:right;"><strong>UNIT COST</strong></p></mj-text>
</mj-column>
<mj-column width="25%"><mj-text ><p style="text-align:right;"><strong>TOTAL</strong></p></mj-text>
</mj-column>
</mj-section>
<mj-section padding="0px" ><mj-column padding="0px"><mj-text ><p style="text-align:center;">{{#markdown}}---{{/markdown}}</p></mj-text>
</mj-column></mj-section>
{{#items}}<mj-section ><mj-column width="40%"><mj-text ><p>{{product.name}}</p></mj-text>
</mj-column>
<mj-column width="10%"><mj-text ><p style="text-align:right;">{{orderedQuantity}}</p></mj-text>
</mj-column>
<mj-column width="25%"><mj-text ><p style="text-align:right;">{{#if pricing-information.tradePrice.price}}{{toFixed (divide pricing-information.tradePrice.price orderedQuantity) 2}}{{else}}N/A{{/if}}</p></mj-text>
</mj-column>
<mj-column width="25%"><mj-text ><p style="text-align:right;">{{#if pricing-information.tradePrice.price}}{{toFixed pricing-information.tradePrice.price}}{{pricing-information.tradePrice.currencyCode}}{{else}}N/A{{/if}}</p></mj-text>
</mj-column>
</mj-section>
<mj-section padding="0px" ><mj-column padding="0px"><mj-text ><p><strong>Attributes</strong></p></mj-text>
</mj-column></mj-section>
{{#product.attributes}}<mj-section ><mj-column width="50%"><mj-text ><p>{{name}}</p></mj-text>
</mj-column>
<mj-column width="50%"><mj-text ><p>{{value}}</p></mj-text>
</mj-column>
</mj-section>
{{/product.attributes}}<mj-section padding="0px" ><mj-column padding="0px"><mj-text ><p class="edie-color-p-FFFF00">Artwork link: <a href="https://uiwrap.trdlnk.cimpress.io/?utm_source=puremail&amp;utm_medium=email&amp;utm_campaign=order_request&amp;utm_content=text&amp;url={{links.document.href}}">click to download</a></p><p>Shipping address: <a href="https://uiwrap.trdlnk.cimpress.io/?method=POST&amp;url=https://stereotype.trdlnk.cimpress.io/v1/templates/FOMA%20Order%20Address%20as%20Html/materializations&amp;body=%7B%22links%22%3A%7B%22self%22%3A%7B%22href%22%3A%22{{order.links.self.href}}%22%7D%7D%7D&amp;filename={{order.orderId}}-shipping-address.html&amp;headers={%22accept%22:%22text/html%22}">click to download</a></p><p style="text-align:center;">{{#markdown}}---{{/markdown}}</p></mj-text>
</mj-column></mj-section>
{{/items}}<mj-section ><mj-column width="80%"><mj-text ><p style="text-align:right;" class="edie-color-m-FFFF00"><strong>TOTAL COST</strong></p></mj-text>
</mj-column>
<mj-column width="20%"><mj-text ><p style="text-align:right;">{{toFixed (sum (pluck items 'pricing-information.tradePrice.price')) 2}}</p></mj-text>
</mj-column>
</mj-section>
<mj-section ><mj-column ><mj-button color="#ffffff" width="200px" background-color="#35ad96" border="0px solid #127769">ACCEPT</mj-button>
<mj-image src="path_to_horse" href="horse_website" alt="Image of a horse" width="100%" border="0px solid #4f5d75"/>
</mj-column>
<mj-column ><mj-button color="#ffffff" width="200px" background-color="#f0563a" border="2px solid #a9d6e5">REJECT</mj-button>
</mj-column>
<mj-column ><mj-button color="#ffffff" width="200px" background-color="#006f8a" border="0px solid #4f5d75">ORDER SHIPPED</mj-button>
</mj-column>
</mj-section>
<mj-section padding="0px" ><mj-column padding="0px"><mj-text ><p style="text-align:center;"><span class="text-huge"><strong>Contact National Pen</strong></span></p></mj-text>
</mj-column></mj-section>
<mj-section ><mj-column width="33%"></mj-column>
<mj-column width="34%"><mj-button color="#ffffff" width="200px" background-color="#697582">STOCK</mj-button>
<mj-button color="#ffffff" width="200px" background-color="#697582">DELIVERY</mj-button>
<mj-button color="#ffffff" width="200px" background-color="#697582">ARTWORK</mj-button>
<mj-button color="#ffffff" width="200px" background-color="#697582">QUALITY</mj-button>
</mj-column>
<mj-column width="33%"></mj-column>
</mj-section>
</mj-wrapper>
</mj-body>
</mjml>`;

        expect(mjml).to.contain('.edie-color-p-FFFF00 { color: #FFFF00 }');
        expect(mjml).to.contain('.edie-color-m-FFFF00 { background-color: #FFFF00 }');

        mjml = mjml.replace(/\r/g, '').replace(/\n/g, '');
        expectedMjml = expectedMjml.replace(/\n/g, '').replace(/\r/g, '');
        expect(mjml).to.equal(expectedMjml);
    });

    it('convert sample edie without exceptions', function() {
        edie2hbstext((sampleEdie));
    });
});

describe('edie2text', function() {
    it('convert sample edie without exceptions', function() {
        let text = edie2hbstext((sampleEdie));
        expect(text).to.not.contain('&nbsp;');
    });
});
