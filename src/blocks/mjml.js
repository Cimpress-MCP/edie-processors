import htmlToText from 'html-to-text';
import {encloseInMjmlSection} from './common/base';

const mjmlToMjml = (item, blockRenderer, isTopLevelNode) => {
    const content = item.properties.content;
    return isTopLevelNode ? encloseInMjmlSection(content) : content;
};

const mjmlToText = (item, blockRenderer, isTopLevelNode) => {
    const text = htmlToText.fromString(item.properties.content || '', {
        wordwrap: 130,
        ignoreImage: true,
        preserveNewlines: true,
        format: {
            text: (elem) => `${elem.data} `,
        },
    }).trim()
        .replace(/&nbsp;/g, ' ');


    return text + '\r\n';
};

export {
    mjmlToText,
    mjmlToMjml,
};
