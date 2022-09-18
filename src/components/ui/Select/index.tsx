// * react
import React from 'react';
import { ISelectProps } from './types';
import Select, { StylesConfig } from 'react-select';

const styles: StylesConfig<any> = {
    container: (styles) => ({
        ...styles,
        width: '100%',
    }),
    control: (styles) => ({
        ...styles,
        border: 'none',
        borderRadius: 'none',
        backgroundColor: 'white',
        boxShadow:
            '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        borderBox: 'none',
        borderColor: '#a3a3a3',
        cursor: 'pointer',
    }),
    option: (styles) => ({
        ...styles,
        cursor: 'pointer',
    }),
};

const SingleSelect: React.FC<ISelectProps> = ({
    options,
    isClearable,
    placeholder,
    defaultValue,
}) => {
    return (
        <Select
            defaultValue={defaultValue}
            isClearable={isClearable}
            name="select"
            placeholder={placeholder}
            options={options}
            styles={styles}
        />
    );
};

export default SingleSelect;
