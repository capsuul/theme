import { Style, ComponentStyle } from '../types';
declare const resolveComponentStyle: (componentStyle: ComponentStyle, subComponentName?: string | null, classes?: string[], mergeWith?: Style) => Style;
export default resolveComponentStyle;
