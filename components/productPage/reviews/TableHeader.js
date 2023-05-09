import { useState } from 'react';
import styles from './styles.module.scss';

import TableSelect from './TableSelect';

const TableHeader = ({ reviews }) => {
  const [rating, setRating] = useState();

  return (
    <div className={styles.table_header}>
      <TableSelect
        property={rating}
        text="Rating"
        data={ratings.filter((x) => x.value !== rating)}
        handleChange={setRating}
      />
    </div>
  );
};

export default TableHeader;

const ratings = [
    {
        text: "5 star",
        value: 5,
    },
    {
        text: "4 star",
        value: 4,
    },
    {
        text: "3 star",
        value: 3,
    },
    {
        text: "2 star",
        value: 2,
    },
    {
        text: "1 star",
        value: 1,
    },
];
