type Options = {
    label: string;
    value: string;
};

export interface ISelectProps {
    options: Options[];
    isClearable: boolean;
    placeholder?: string;
    defaultValue?: Options;
}
