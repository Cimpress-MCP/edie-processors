import {propertiesToText, translateProps} from './common/base';

const mainToMjml = (item, blockRenderer) => {
    let keyTranslations = {
        'emailBackgroundColor': 'background-color',
        'emailWidth': 'width',
    };

    let properties = propertiesToText(translateProps(item.properties, keyTranslations), ['backgroundColor', 'isPublic']);
    let items = '';
    (item.children || []).forEach((x) => {
        items += blockRenderer(x, blockRenderer, true);
    });

    return `<mj-body ${properties}>
<mj-section background-color="${item.properties['emailBackgroundColor']}"><mj-column><mj-text padding="2px"></mj-text></mj-column></mj-section>
${items}
<mj-section background-color="${item.properties['emailBackgroundColor']}"><mj-column><mj-text padding="2px"></mj-text></mj-column></mj-section>
</mj-body>`;
};

const mainTotext = (item, blockRenderer) => {
    let items = '';
    (item.children || []).forEach((x) => {
        items += blockRenderer(x, blockRenderer, true);
    });
    return items + '\r\n';
};

export {
    mainToMjml,
    mainTotext,
};
