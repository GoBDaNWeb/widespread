// * react
import React from 'react';
import Select from 'react-select';

const SingleSelect: React.FC<any> = ({ options }) => {
    return (
        <Select
            className="basic-single"
            classNamePrefix="select"
            isDisabled={false}
            isLoading={false}
            isClearable={false}
            isRtl={false}
            isSearchable={false}
            defaultValue={options[0]}
            name="color"
            options={options}
        />
    );
};

export default SingleSelect;
