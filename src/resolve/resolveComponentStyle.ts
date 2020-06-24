import { omitBy, assignIn, filter, trimStart, each } from 'lodash';

import { Style, ComponentStyle } from '../types';

const removeClassesAndSubComponents = (componentStyle: ComponentStyle): Style =>
  omitBy(componentStyle, (value) => typeof value === 'object');

const resolveComponentStyle = (
  componentStyle: ComponentStyle,
  subComponentName: string | null = null,
  classes: string[] = [],
  mergeWith: Style = {},
): Style => {
  const toMerge: Style[] = [];

  const exploreClassesAndSubComponents = (
    subComponentStyle: ComponentStyle,
  ) => {
    toMerge.push(removeClassesAndSubComponents(subComponentStyle));

    each(
      filter(
        subComponentStyle,
        (_value, key) =>
          key === subComponentName || classes.includes(trimStart(key, '.')),
      ),
      (style) => exploreClassesAndSubComponents(style as ComponentStyle),
    );
  };

  exploreClassesAndSubComponents(componentStyle);

  return assignIn(mergeWith, ...toMerge);
};

export default resolveComponentStyle;
