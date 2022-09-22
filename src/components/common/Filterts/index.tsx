// * react
import React, { useEffect } from 'react';
import { IFiltersProps } from './types';
import { useForm, Controller } from 'react-hook-form';

// * store
import { observer } from 'mobx-react-lite';
import filter from '@store/filter';

// * styles
import styles from './Filters.module.scss';

// * components
import Title from '@components/ui/Title';
import Search from '@components/ui/Search';
import SingleSelect from '@components/ui/Select';

const sort = [
    { label: 'Сортировка по Цене', value: 'price' },
    { label: 'Сортировка по Названию', value: 'name' },
];

const order = [
    { label: 'По Возрастанию', value: 'ASC' },
    { label: 'По Убыванию', value: 'DESC' },
];

const select = [
    { label: 'Только Новые', value: 'new' },
    { label: 'Только Популярные', value: 'popular' },
    { label: 'Только Эксклюзивные', value: 'exclusive' },
    { label: 'Только Распродажа', value: 'sale' },
];

const Filters: React.FC<IFiltersProps> = observer(({ title }) => {
    const { control, watch } = useForm();

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            name === 'search' && filter.setSearchValue(value.search);
            name === 'sort' &&
                filter.setSort(value.sort ? value.sort.value : null);
            name === 'order' && filter.setOrder(value.order.value);
            name === 'select' &&
                filter.setSelect(value.select ? value.select.value : null);
        });
        return () => subscription.unsubscribe();
    }, [watch]);

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
                <Controller
                    name="sort"
                    control={control}
                    render={({ field: { onChange } }) => (
                        <SingleSelect
                            options={sort}
                            isClearable
                            onChange={onChange}
                            placeholder="Сортировка по"
                        />
                    )}
                />
                <Controller
                    name="order"
                    control={control}
                    render={({ field: { onChange } }) => (
                        <SingleSelect
                            options={order}
                            defaultValue={order[0]}
                            isClearable={false}
                            onChange={onChange}
                        />
                    )}
                />
            </div>
            <Controller
                name="select"
                control={control}
                render={({ field: { onChange } }) => (
                    <SingleSelect
                        options={select}
                        isClearable
                        placeholder="Все"
                        onChange={onChange}
                    />
                )}
            />
        </form>
    );
});

export default Filters;
