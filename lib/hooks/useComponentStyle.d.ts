import { Style } from '../types';
declare const useComponentStyle: (componentName: string, classes?: string[] | undefined) => (subComponentName?: string | null, mergeWith?: Style) => Style;
export default useComponentStyle;
