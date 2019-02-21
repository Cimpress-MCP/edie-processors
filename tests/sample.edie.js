export default {
    'formatVersion': 'v1.0',
    'mimeHeaders': {
        'to': 'aaa@bbb.com',
        'subject': 'xx sb',
    },
    'structure': {
        'id': 'main',
        'children': [
            {
                'id': '66111d50-23f8-11e9-ab78-270edb21e50d',
                'children': [
                    {
                        'id': '6909c3e0-23f8-11e9-ab78-270edb21e50d',
                        'children': [
                            {
                                'id': '6eb6b500-23f8-11e9-ab78-270edb21e50d',
                                'children': null,
                                'type': 'text',
                                'properties': {
                                    'content': '<p><strong>SUPPLIER</strong></p><p><span type="placeholder" content="{{fulfiller.name}}">&nbsp;</span></p>',
                                    'backgroundColor': '#ffffff',
                                },
                                'parentId': '6909c3e0-23f8-11e9-ab78-270edb21e50d',
                            },
                        ],
                        'type': 'column',
                        'properties': {
                            'width': '50%',
                            'backgroundColor': '#ffffff',
                            'padding': '0',
                        },
                        'parentId': '66111d50-23f8-11e9-ab78-270edb21e50d',
                    },
                    {
                        'id': '67731e50-23f8-11e9-ab78-270edb21e50d',
                        'children': [
                            {
                                'id': '729dda40-23f8-11e9-ab78-270edb21e50d',
                                'children': null,
                                'type': 'text',
                                'properties': {
                                    'content': '<p style="text-align:right;"><strong>REASON FOR REQUIREMENT</strong></p><p style="text-align:right;"><strong>Order Number:&nbsp;</strong><span type="placeholder" content="{{order.orderId}}"></span></p><p style="text-align:right;"><span type="placeholder" content="{{order.customs-details.consigneeAddress.country}}"></span></p>',
                                },
                                'parentId': '67731e50-23f8-11e9-ab78-270edb21e50d',
                            },
                        ],
                        'type': 'column',
                        'properties': {
                            'width': '50%',
                            'backgroundColor': '#ffffff',
                        },
                        'parentId': '66111d50-23f8-11e9-ab78-270edb21e50d',
                    },
                ],
                'type': 'row',
                'properties': {},
                'parentId': 'main',
            },
            {
                'id': '9aef8200-23f8-11e9-ab78-270edb21e50d',
                'children': null,
                'type': 'text',
                'properties': {
                    'content': '<p><strong>ORDER ID:</strong></p><p><span type="placeholder" content="{{order.orderId}}">&nbsp;</span></p>',
                },
                'parentId': 'main',
            },
            {
                'id': '9d28f740-23f8-11e9-ab78-270edb21e50d',
                'children': null,
                'type': 'text',
                'properties': {
                    'content': '<p><strong>EXPECTED SHIP DATE:</strong></p><p><span type="placeholder" content="{{moment (moment createdDate add=60480000) \'DD-MMM-YYYY\'}}">&nbsp;</span></p>',
                    'backgroundColor': '#ffffff',
                },
                'parentId': 'main',
            },
            {
                'id': 'bad20b60-23f8-11e9-ab78-270edb21e50d',
                'children': [
                    {
                        'id': 'c235fb50-23f8-11e9-ab78-270edb21e50d',
                        'children': [
                            {
                                'id': 'c4208d40-23f8-11e9-ab78-270edb21e50d',
                                'children': null,
                                'type': 'text',
                                'properties': {
                                    'content': '<p><strong>PRODUCT</strong></p>',
                                },
                                'parentId': 'c235fb50-23f8-11e9-ab78-270edb21e50d',
                            },
                        ],
                        'type': 'column',
                        'properties': {
                            'width': '40%',
                        },
                        'parentId': 'bad20b60-23f8-11e9-ab78-270edb21e50d',
                    },
                    {
                        'id': 'bfc94110-23f8-11e9-ab78-270edb21e50d',
                        'children': [
                            {
                                'id': 'c6f000f0-23f8-11e9-ab78-270edb21e50d',
                                'children': null,
                                'type': 'text',
                                'properties': {
                                    'content': '<p style="text-align:right;"><strong>QUANTITY</strong></p>',
                                },
                                'parentId': 'bfc94110-23f8-11e9-ab78-270edb21e50d',
                            },
                        ],
                        'type': 'column',
                        'properties': {
                            'width': '10%',
                        },
                        'parentId': 'bad20b60-23f8-11e9-ab78-270edb21e50d',
                    },
                    {
                        'id': 'be0c00b0-23f8-11e9-ab78-270edb21e50d',
                        'children': [
                            {
                                'id': 'cef90a80-23f8-11e9-ab78-270edb21e50d',
                                'children': null,
                                'type': 'text',
                                'properties': {
                                    'content': '<p style="text-align:right;"><strong>UNIT COST</strong></p>',
                                },
                                'parentId': 'be0c00b0-23f8-11e9-ab78-270edb21e50d',
                            },
                        ],
                        'type': 'column',
                        'properties': {
                            'width': '25%',
                        },
                        'parentId': 'bad20b60-23f8-11e9-ab78-270edb21e50d',
                    },
                    {
                        'id': 'bc973b00-23f8-11e9-ab78-270edb21e50d',
                        'children': [
                            {
                                'id': 'd1a42d50-23f8-11e9-ab78-270edb21e50d',
                                'children': null,
                                'type': 'text',
                                'properties': {
                                    'content': '<p style="text-align:right;"><strong>TOTAL</strong></p>',
                                },
                                'parentId': 'bc973b00-23f8-11e9-ab78-270edb21e50d',
                            },
                        ],
                        'type': 'column',
                        'properties': {
                            'width': '25%',
                        },
                        'parentId': 'bad20b60-23f8-11e9-ab78-270edb21e50d',
                    },
                ],
                'type': 'row',
                'properties': {},
                'parentId': 'main',
            },
            {
                'id': 'b9615440-2630-11e9-92d6-4715113d59c1',
                'children': null,
                'type': 'text',
                'properties': {
                    'content': '<p style="text-align:center;"><span type="placeholder" content="{{#markdown}}"></span>---<span type="placeholder" content="{{/markdown}}"></span></p>',
                },
                'parentId': 'main',
            },
            {
                'id': '774a7100-262a-11e9-a1c1-53966f650c54',
                'children': [
                    {
                        'id': 'f039f490-262b-11e9-b756-0f2ab9e2ce82',
                        'children': [
                            {
                                'id': 'f6e2aad0-262b-11e9-b756-0f2ab9e2ce82',
                                'children': [
                                    {
                                        'id': 'f9b61620-262b-11e9-b756-0f2ab9e2ce82',
                                        'children': null,
                                        'type': 'text',
                                        'properties': {
                                            'content': '<p><span type="placeholder" content="{{product.name}}">&nbsp;</span></p>',
                                        },
                                        'parentId': 'f6e2aad0-262b-11e9-b756-0f2ab9e2ce82',
                                    },
                                ],
                                'type': 'column',
                                'properties': {
                                    'width': '40%',
                                },
                                'parentId': 'f039f490-262b-11e9-b756-0f2ab9e2ce82',
                            },
                            {
                                'id': 'f5dea850-262b-11e9-b756-0f2ab9e2ce82',
                                'children': [
                                    {
                                        'id': 'fc6c5c80-262b-11e9-b756-0f2ab9e2ce82',
                                        'children': null,
                                        'type': 'text',
                                        'properties': {
                                            'content': '<p style="text-align:right;"><span type="placeholder" content="{{orderedQuantity}}">&nbsp;</span></p>',
                                        },
                                        'parentId': 'f5dea850-262b-11e9-b756-0f2ab9e2ce82',
                                    },
                                ],
                                'type': 'column',
                                'properties': {
                                    'width': '10%',
                                },
                                'parentId': 'f039f490-262b-11e9-b756-0f2ab9e2ce82',
                            },
                            {
                                'id': 'f4d2dda0-262b-11e9-b756-0f2ab9e2ce82',
                                'children': [
                                    {
                                        'id': 'fdfee360-262b-11e9-b756-0f2ab9e2ce82',
                                        'children': null,
                                        'type': 'text',
                                        'properties': {
                                            'content': '<p style="text-align:right;"><span type="placeholder" content="{{#if pricing-information.tradePrice.price}}"></span><span type="placeholder" content="{{toFixed (divide pricing-information.tradePrice.price orderedQuantity) 2}}"></span><span type="placeholder" content="{{else}}"></span>N/A<span type="placeholder" content="{{/if}}"></span></p>',
                                        },
                                        'parentId': 'f4d2dda0-262b-11e9-b756-0f2ab9e2ce82',
                                    },
                                ],
                                'type': 'column',
                                'properties': {
                                    'width': '25%',
                                },
                                'parentId': 'f039f490-262b-11e9-b756-0f2ab9e2ce82',
                            },
                            {
                                'id': 'f3a18990-262b-11e9-b756-0f2ab9e2ce82',
                                'children': [
                                    {
                                        'id': 'ffdd4050-262b-11e9-b756-0f2ab9e2ce82',
                                        'children': null,
                                        'type': 'text',
                                        'properties': {
                                            'content': '<p style="text-align:right;"><span type="placeholder" content="{{#if pricing-information.tradePrice.price}}"></span><span type="placeholder" content="{{toFixed pricing-information.tradePrice.price}}"></span><span type="placeholder" content="{{pricing-information.tradePrice.currencyCode}}"></span><span type="placeholder" content="{{else}}"></span>N/A<span type="placeholder" content="{{/if}}"></span></p>',
                                        },
                                        'parentId': 'f3a18990-262b-11e9-b756-0f2ab9e2ce82',
                                    },
                                ],
                                'type': 'column',
                                'properties': {
                                    'width': '25%',
                                },
                                'parentId': 'f039f490-262b-11e9-b756-0f2ab9e2ce82',
                            },
                        ],
                        'type': 'row',
                        'properties': {},
                        'parentId': '774a7100-262a-11e9-a1c1-53966f650c54',
                    },
                    {
                        'id': '4b4d1f00-262d-11e9-b756-0f2ab9e2ce82',
                        'children': null,
                        'type': 'text',
                        'properties': {
                            'content': '<p><strong>Attributes</strong></p>',
                        },
                        'parentId': '774a7100-262a-11e9-a1c1-53966f650c54',
                    },
                    {
                        'id': '0372a6a0-262d-11e9-b756-0f2ab9e2ce82',
                        'children': [
                            {
                                'id': '1009eae0-262d-11e9-b756-0f2ab9e2ce82',
                                'children': [
                                    {
                                        'id': '13ab7ba0-262d-11e9-b756-0f2ab9e2ce82',
                                        'children': [
                                            {
                                                'id': '1675e640-262d-11e9-b756-0f2ab9e2ce82',
                                                'children': null,
                                                'type': 'text',
                                                'properties': {
                                                    'content': '<p><span type="placeholder" content="{{name}}">&nbsp;</span></p>',
                                                },
                                                'parentId': '13ab7ba0-262d-11e9-b756-0f2ab9e2ce82',
                                            },
                                        ],
                                        'type': 'column',
                                        'properties': {
                                            'width': '50%',
                                        },
                                        'parentId': '1009eae0-262d-11e9-b756-0f2ab9e2ce82',
                                    },
                                    {
                                        'id': '127df820-262d-11e9-b756-0f2ab9e2ce82',
                                        'children': [
                                            {
                                                'id': '18aa0450-262d-11e9-b756-0f2ab9e2ce82',
                                                'children': null,
                                                'type': 'text',
                                                'properties': {
                                                    'content': '<p><span type="placeholder" content="{{value}}">&nbsp;</span></p>',
                                                },
                                                'parentId': '127df820-262d-11e9-b756-0f2ab9e2ce82',
                                            },
                                        ],
                                        'type': 'column',
                                        'properties': {
                                            'width': '50%',
                                        },
                                        'parentId': '1009eae0-262d-11e9-b756-0f2ab9e2ce82',
                                    },
                                ],
                                'type': 'row',
                                'properties': {},
                                'parentId': '0372a6a0-262d-11e9-b756-0f2ab9e2ce82',
                            },
                        ],
                        'type': 'loop',
                        'properties': {
                            'loopPath': 'product.attributes',
                        },
                        'parentId': '774a7100-262a-11e9-a1c1-53966f650c54',
                    },
                    {
                        'id': '7451ea20-262d-11e9-b756-0f2ab9e2ce82',
                        'children': null,
                        'type': 'text',
                        'properties': {
                            'content': '<p class="edie-color-p-FFFF00">Artwork link: <a href="https://uiwrap.trdlnk.cimpress.io/?utm_source=puremail&amp;utm_medium=email&amp;utm_campaign=order_request&amp;utm_content=text&amp;url={{links.document.href}}">click to download</a></p><p>Shipping address: <a href="https://uiwrap.trdlnk.cimpress.io/?method=POST&amp;url=https://stereotype.trdlnk.cimpress.io/v1/templates/FOMA%20Order%20Address%20as%20Html/materializations&amp;body=%7B%22links%22%3A%7B%22self%22%3A%7B%22href%22%3A%22{{order.links.self.href}}%22%7D%7D%7D&amp;filename={{order.orderId}}-shipping-address.html&amp;headers={%22accept%22:%22text/html%22}">click to download</a></p><p style="text-align:center;"><span type="placeholder" content="{{#markdown}}"></span>---<span type="placeholder" content="{{/markdown}}"></span></p>',
                        },
                        'parentId': '774a7100-262a-11e9-a1c1-53966f650c54',
                    },
                ],
                'type': 'loop',
                'properties': {
                    'loopPath': 'items',
                },
                'parentId': 'main',
            },
            {
                'id': 'f5712730-2630-11e9-92d6-4715113d59c1',
                'children': [
                    {
                        'id': 'f9dae9f0-2630-11e9-92d6-4715113d59c1',
                        'children': [
                            {
                                'id': '006d3200-2631-11e9-92d6-4715113d59c1',
                                'children': null,
                                'type': 'text',
                                'properties': {
                                    'content': '<p style="text-align:right;" class="edie-color-m-FFFF00"><strong>TOTAL COST</strong></p>',
                                },
                                'parentId': 'f9dae9f0-2630-11e9-92d6-4715113d59c1',
                            },
                        ],
                        'type': 'column',
                        'properties': {
                            'width': '80%',
                        },
                        'parentId': 'f5712730-2630-11e9-92d6-4715113d59c1',
                    },
                    {
                        'id': 'f74daf60-2630-11e9-92d6-4715113d59c1',
                        'children': [
                            {
                                'id': 'fdb0aa10-2630-11e9-92d6-4715113d59c1',
                                'children': null,
                                'type': 'text',
                                'properties': {
                                    'content': '<p style="text-align:right;"><span type="placeholder" content="{{toFixed (sum (pluck items \'pricing-information.tradePrice.price\')) 2}}">&nbsp;</span></p>',
                                },
                                'parentId': 'f74daf60-2630-11e9-92d6-4715113d59c1',
                            },
                        ],
                        'type': 'column',
                        'properties': {
                            'width': '20%',
                        },
                        'parentId': 'f5712730-2630-11e9-92d6-4715113d59c1',
                    },
                ],
                'type': 'row',
                'properties': {},
                'parentId': 'main',
            },
            {
                'id': '31510420-23fa-11e9-ab78-270edb21e50d',
                'children': [
                    {
                        'id': '3cf33a00-23fa-11e9-ab78-270edb21e50d',
                        'children': [
                            {
                                'id': '595772f0-2577-11e9-bf6c-9b5a7457e000',
                                'children': null,
                                'type': 'button',
                                'properties': {
                                    'content': 'ACCEPT',
                                    'backgroundColor': '#35ad96',
                                    'width': '200px',
                                    'textAlign': 'center',
                                    'borderSize': '0px',
                                    'borderColor': '#127769',
                                    'color': '#ffffff',
                                },
                                'parentId': '3cf33a00-23fa-11e9-ab78-270edb21e50d',
                            },
                        ],
                        'type': 'column',
                        'properties': {},
                        'parentId': '31510420-23fa-11e9-ab78-270edb21e50d',
                    },
                    {
                        'id': '374b51f0-23fa-11e9-ab78-270edb21e50d',
                        'children': [
                            {
                                'id': '5ec55f40-2577-11e9-bf6c-9b5a7457e000',
                                'children': null,
                                'type': 'button',
                                'properties': {
                                    'content': 'REJECT',
                                    'width': '200px',
                                    'color': '#ffffff',
                                    'backgroundColor': '#f0563a',
                                    'borderColor': '#a9d6e5',
                                    'borderSize': '2px',
                                },
                                'parentId': '374b51f0-23fa-11e9-ab78-270edb21e50d',
                            },
                        ],
                        'type': 'column',
                        'properties': {},
                        'parentId': '31510420-23fa-11e9-ab78-270edb21e50d',
                    },
                    {
                        'id': '35b60bf0-23fa-11e9-ab78-270edb21e50d',
                        'children': [
                            {
                                'id': '62210d60-2577-11e9-bf6c-9b5a7457e000',
                                'children': null,
                                'type': 'button',
                                'properties': {
                                    'content': 'ORDER SHIPPED',
                                    'color': '#ffffff',
                                    'backgroundColor': '#006f8a',
                                    'width': '200px',
                                    'borderSize': '0px',
                                    'borderColor': '#4f5d75',
                                },
                                'parentId': '35b60bf0-23fa-11e9-ab78-270edb21e50d',
                            },
                        ],
                        'type': 'column',
                        'properties': {},
                        'parentId': '31510420-23fa-11e9-ab78-270edb21e50d',
                    },
                ],
                'type': 'row',
                'properties': {},
                'parentId': 'main',
            },
            {
                'id': '075dba50-23fa-11e9-ab78-270edb21e50d',
                'children': null,
                'type': 'text',
                'properties': {
                    'content': '<p style="text-align:center;"><span class="text-huge"><strong>Contact National Pen</strong></span></p>',
                },
                'parentId': 'main',
            },
            {
                'id': '7c89eaa0-2577-11e9-bf6c-9b5a7457e000',
                'children': [
                    {
                        'id': '8291f410-2577-11e9-bf6c-9b5a7457e000',
                        'children': [],
                        'type': 'column',
                        'properties': {
                            'width': '33%',
                        },
                        'parentId': '7c89eaa0-2577-11e9-bf6c-9b5a7457e000',
                    },
                    {
                        'id': '8112f530-2577-11e9-bf6c-9b5a7457e000',
                        'children': [
                            {
                                'id': '87408800-2577-11e9-bf6c-9b5a7457e000',
                                'children': null,
                                'type': 'button',
                                'properties': {
                                    'content': 'STOCK',
                                    'color': '#ffffff',
                                    'width': '200px',
                                    'backgroundColor': '#697582',
                                },
                                'parentId': '8112f530-2577-11e9-bf6c-9b5a7457e000',
                            },
                            {
                                'id': '8fef4770-2577-11e9-bf6c-9b5a7457e000',
                                'children': null,
                                'type': 'button',
                                'properties': {
                                    'content': 'DELIVERY',
                                    'color': '#ffffff',
                                    'backgroundColor': '#697582',
                                    'width': '200px',
                                },
                                'parentId': '8112f530-2577-11e9-bf6c-9b5a7457e000',
                            },
                            {
                                'id': '92225410-2577-11e9-bf6c-9b5a7457e000',
                                'children': null,
                                'type': 'button',
                                'properties': {
                                    'content': 'ARTWORK',
                                    'color': '#ffffff',
                                    'backgroundColor': '#697582',
                                    'width': '200px',
                                },
                                'parentId': '8112f530-2577-11e9-bf6c-9b5a7457e000',
                            },
                            {
                                'id': '94771980-2577-11e9-bf6c-9b5a7457e000',
                                'children': null,
                                'type': 'button',
                                'properties': {
                                    'content': 'QUALITY',
                                    'color': '#ffffff',
                                    'backgroundColor': '#697582',
                                    'width': '200px',
                                },
                                'parentId': '8112f530-2577-11e9-bf6c-9b5a7457e000',
                            },
                        ],
                        'type': 'column',
                        'properties': {
                            'width': '34%',
                        },
                        'parentId': '7c89eaa0-2577-11e9-bf6c-9b5a7457e000',
                    },
                    {
                        'id': '7f3645f0-2577-11e9-bf6c-9b5a7457e000',
                        'children': [],
                        'type': 'column',
                        'properties': {
                            'width': '33%',
                        },
                        'parentId': '7c89eaa0-2577-11e9-bf6c-9b5a7457e000',
                    },
                ],
                'type': 'row',
                'properties': {},
                'parentId': 'main',
            },
        ],
        'type': 'main',
        'properties': {
            'backgroundColor': '#ffffff',
            'emailBackgroundColor': '#4f5d75',
            'isPublic': true,
            'emailWidth': '700px',
        },
        'parentId': 'main',
    },
};
