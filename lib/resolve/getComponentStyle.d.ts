import { Styles, ComponentStyle } from '../types';
declare const getComponentStyle: (styles: Styles, componentName: keyof Styles) => ComponentStyle;
export default getComponentStyle;
