import InputOption from './InputOption';
declare type NormalizedOption = {
    value: null | string | number | symbol | boolean;
    text: string | number | boolean;
    children?: Array<NormalizedOption>;
    raw?: InputOption;
};
export default NormalizedOption;
