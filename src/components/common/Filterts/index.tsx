// * react
import React, { useEffect } from 'react';
import { IFiltersProps } from './types';
import { useForm, Controller } from 'react-hook-form';

// * hooks
import useDebounce from '@hooks/useDebounce';

// * styles
import styles from './Filters.module.scss';

// * components
import Title from '@components/ui/Title';
import Search from '@components/ui/Search';
import Select from '@components/ui/Select';

const sort = [
    { label: 'Цена', value: 'price' },
    { label: 'Название', value: 'name' },
];

const order = [
    { label: 'По возрастанию', value: 'asc' },
    { label: 'По убыванию', value: 'desc' },
];

const select = [
    { label: 'Сначала новые', value: 'new' },
    { label: 'Сначала популярные', value: 'popular' },
    { label: 'Сначала эксклюзивные', value: 'exclusive' },
];

const Filters: React.FC<IFiltersProps> = ({ title }) => {
    const { control, watch } = useForm();
    const watchSearch = watch('search');

    const debounce = useDebounce(watchSearch);

    useEffect(() => {
        console.log('kekelok)');
    }, [debounce]);

    return (
        <form className={styles.filters}>
            {title && <Title variant="h3">{title}</Title>}
            <Controller
                name="search"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Search
                        placeholder="Найти товар по названию"
                        onChange={onChange}
                        value={value}
                    />
                )}
            />
            <div className={styles.sort}>
                <Select
                    options={sort}
                    isClearable
                    placeholder="Сортировка по"
                />

                <Select
                    options={order}
                    defaultValue={order[0]}
                    isClearable={false}
                />
            </div>
            <Select options={select} isClearable placeholder="Сначала" />
        </form>
    );
};

export default Filters;
