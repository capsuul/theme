import Style from './Style';
declare type ComponentStyle<Subs extends string = string> = Style | {
    [S in Subs]?: ComponentStyle<Subs>;
};
export default ComponentStyle;
