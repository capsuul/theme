import Theme from './Theme';
declare type ThemesType<Variants extends string = string> = {
    [V in Variants]?: Theme;
};
export default ThemesType;
