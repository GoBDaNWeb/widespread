// * react
import React from 'react';
import { IPaginationProps } from './types';

// * store
import { observer } from 'mobx-react-lite';
import filter from '@store/filter';

// * icons
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

// * styles
import styles from './Pagination.module.scss';

const Pagination: React.FC<IPaginationProps> = observer(({ totalPages }) => {
    const handleChangePage = (page: number): void => {
        filter.setCurrentPage(page);
    };

    console.log(filter.currentPage < 5 || filter.currentPage > 5);

    return (
        <div className={styles.pagination}>
            <button
                onClick={() => handleChangePage(filter.currentPage - 1)}
                className={styles.icon}
                disabled={filter.currentPage === 1}
            >
                <MdNavigateBefore />
            </button>

            <ul className={styles.pages}>
                {filter.currentPage > 1 && (
                    <>
                        {filter.currentPage !== 1 && filter.currentPage > 4 && (
                            <li>
                                <button onClick={() => handleChangePage(1)}>
                                    1
                                </button>
                            </li>
                        )}
                        {filter.currentPage > 5 && <li>...</li>}
                        {filter.currentPage === totalPages ? (
                            <li>
                                <button
                                    onClick={() =>
                                        handleChangePage(filter.currentPage - 6)
                                    }
                                >
                                    {filter.currentPage - 6}
                                </button>
                            </li>
                        ) : null}

                        {filter.currentPage === totalPages ||
                        filter.currentPage === totalPages - 1 ? (
                            <li>
                                <button
                                    onClick={() =>
                                        handleChangePage(filter.currentPage - 5)
                                    }
                                >
                                    {filter.currentPage - 5}
                                </button>
                            </li>
                        ) : null}
                        {filter.currentPage === totalPages ||
                        filter.currentPage === totalPages - 1 ||
                        filter.currentPage === totalPages - 2 ? (
                            <li>
                                <button
                                    onClick={() =>
                                        handleChangePage(filter.currentPage - 4)
                                    }
                                >
                                    {filter.currentPage - 4}
                                </button>
                            </li>
                        ) : null}
                        {filter.currentPage !== 2 &&
                        filter.currentPage !== 3 &&
                        filter.currentPage <= 5 ? (
                            <li>
                                <button
                                    onClick={() =>
                                        handleChangePage(filter.currentPage - 3)
                                    }
                                >
                                    {filter.currentPage - 3}
                                </button>
                            </li>
                        ) : (
                            <>
                                {filter.currentPage === totalPages - 1 ||
                                filter.currentPage === totalPages - 2 ||
                                filter.currentPage === totalPages - 3 ||
                                filter.currentPage === totalPages ? (
                                    <li>
                                        <button
                                            onClick={() =>
                                                handleChangePage(
                                                    filter.currentPage - 3,
                                                )
                                            }
                                        >
                                            {filter.currentPage - 3}
                                        </button>
                                    </li>
                                ) : null}
                            </>
                        )}
                        {filter.currentPage !== 2 ? (
                            <li>
                                <button
                                    onClick={() =>
                                        handleChangePage(filter.currentPage - 2)
                                    }
                                >
                                    {filter.currentPage - 2}
                                </button>
                            </li>
                        ) : null}

                        <li>
                            <button
                                onClick={() =>
                                    handleChangePage(filter.currentPage - 1)
                                }
                            >
                                {filter.currentPage - 1}
                            </button>
                        </li>
                    </>
                )}

                <li>
                    <button className={styles.current}>
                        {filter.currentPage}
                    </button>
                </li>

                <>
                    {filter.currentPage <= 5 ||
                    filter.currentPage !== totalPages ? (
                        <li>
                            <button
                                onClick={() =>
                                    handleChangePage(filter.currentPage + 1)
                                }
                            >
                                {filter.currentPage + 1}
                            </button>
                        </li>
                    ) : null}

                    {(filter.currentPage !== totalPages &&
                        filter.currentPage !== totalPages - 1) ||
                    filter.currentPage === totalPages - 2 ? (
                        <li>
                            <button
                                onClick={() =>
                                    handleChangePage(filter.currentPage + 2)
                                }
                            >
                                {filter.currentPage + 2}
                            </button>
                        </li>
                    ) : null}

                    {filter.currentPage !== totalPages && (
                        <>
                            {(filter.currentPage !== 5 &&
                                filter.currentPage < 6) ||
                            filter.currentPage === totalPages - 3 ||
                            filter.currentPage === totalPages - 4 ? (
                                <li>
                                    <button
                                        onClick={() =>
                                            handleChangePage(
                                                filter.currentPage + 3,
                                            )
                                        }
                                    >
                                        {filter.currentPage + 3}
                                    </button>
                                </li>
                            ) : null}
                        </>
                    )}

                    {filter.currentPage !== totalPages && (
                        <>
                            {filter.currentPage <= 3 && (
                                <li>
                                    <button
                                        onClick={() =>
                                            handleChangePage(
                                                filter.currentPage + 4,
                                            )
                                        }
                                    >
                                        {filter.currentPage + 4}
                                    </button>
                                </li>
                            )}
                        </>
                    )}
                    {filter.currentPage !== totalPages && (
                        <>
                            {filter.currentPage <= 2 && (
                                <li>
                                    <button
                                        onClick={() =>
                                            handleChangePage(
                                                filter.currentPage + 5,
                                            )
                                        }
                                    >
                                        {filter.currentPage + 5}
                                    </button>
                                </li>
                            )}
                        </>
                    )}
                    {filter.currentPage !== totalPages && (
                        <>
                            {filter.currentPage === 1 && (
                                <li>
                                    <button
                                        onClick={() =>
                                            handleChangePage(
                                                filter.currentPage + 6,
                                            )
                                        }
                                    >
                                        {filter.currentPage + 6}
                                    </button>
                                </li>
                            )}
                        </>
                    )}
                    {filter.currentPage !== totalPages &&
                        filter.currentPage !== totalPages - 1 &&
                        filter.currentPage !== totalPages - 2 &&
                        filter.currentPage !== totalPages - 3 &&
                        filter.currentPage !== totalPages - 4 && <li>...</li>}
                </>

                {filter.currentPage !== totalPages &&
                    filter.currentPage !== totalPages - 1 &&
                    filter.currentPage !== totalPages - 2 &&
                    filter.currentPage !== totalPages - 3 && (
                        <li>
                            <button
                                onClick={() => handleChangePage(totalPages)}
                            >
                                {totalPages}
                            </button>
                        </li>
                    )}
            </ul>
            <button
                onClick={() => handleChangePage(filter.currentPage + 1)}
                className={styles.icon}
                disabled={filter.currentPage === totalPages}
            >
                <MdNavigateNext />
            </button>
        </div>
    );
});

export default Pagination;
