import { omitBy, assignIn, filter, trimStart, each } from 'lodash';
const removeClassesAndSubComponents = (componentStyle) => omitBy(componentStyle, (value) => typeof value === 'object');
const resolveComponentStyle = (componentStyle, subComponentName = null, classes = [], mergeWith = {}) => {
    const toMerge = [];
    const exploreClassesAndSubComponents = (subComponentStyle) => {
        toMerge.push(removeClassesAndSubComponents(subComponentStyle));
        each(filter(subComponentStyle, (_value, key) => key === subComponentName || classes.includes(trimStart(key, '.'))), (style) => exploreClassesAndSubComponents(style));
    };
    exploreClassesAndSubComponents(componentStyle);
    return assignIn(mergeWith, ...toMerge);
};
export default resolveComponentStyle;
//# sourceMappingURL=resolveComponentStyle.js.map