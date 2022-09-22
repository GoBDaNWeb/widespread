import { ActionMeta } from 'react-select';

type Options = {
    label: string;
    value: string;
};

export interface ISelectProps {
    options: Options[];
    isClearable: boolean;
    placeholder?: string;
    onChange:
        | ((newValue: any, actionMeta: ActionMeta<any>) => void)
        | undefined;
    defaultValue?: Options;
}
