import { useState } from 'react';
import styles from './styles.module.scss';
import usePagination from './PaginationHook';
import { Pagination } from '@mui/material';
import Review from './Review';
import TableSelect from './TableSelect';
import TableHeader from './TableHeader';

const Table = ({ reviews, allSizes, colors }) => {
  const [page, setPage] = useState(1);
  const PER_PAGE = 2;
  const count = Math.ceil(reviews.length / PER_PAGE);
  const _DATA = usePagination(reviews, PER_PAGE);

  //   console.log(_DATA);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <div className={styles.table}>
      <TableHeader
        reviews={reviews}
        allSizes={[{ size: 'All' }, ...allSizes]}
        colors={[{ color: 'All', image: "" }, ...colors]}
      />
      <div className={styles.table_data}>
        {_DATA.currentData().map((review, i) => (
          <Review review={review} key={i} />
        ))}
      </div>
      <div className={styles.pagination}>
        <Pagination
          count={count}
          page={page}
          variant="text"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Table;
