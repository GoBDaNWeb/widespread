// * react
import React from 'react';
import { ISearchProps } from './types';

// * icons
import { AiOutlineSearch } from 'react-icons/ai';

// * styles
import styles from './Search.module.scss';

const Search: React.FC<ISearchProps> = ({ placeholder, value, onChange }) => {
    return (
        <label htmlFor="search" className={styles.search}>
            <AiOutlineSearch className={styles.icon} />
            <input
                id="search"
                className={styles.input}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </label>
    );
};

export default Search;
