import { Styles, ComponentStyle } from '../types';

const getComponentStyle = (
  styles: Styles,
  componentName: keyof Styles,
): ComponentStyle => {
  return styles[componentName] || {};
};

export default getComponentStyle;
