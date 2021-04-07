import React, { useState } from 'react';
import s from './Paginator.module.css';

const Paginator = ({totalCountUsers, pageSize, currentPage, onPageChanged, portionSize = 15}) => {
  let pageCount = Math.ceil(totalCountUsers / pageSize);

    let pages = [];

    for(let i = 1; i <= pageCount; i++){
      pages.push(i);
    }
    let portionCount = Math.ceil(pageCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

  return (
        <div className={s.pageBtn}>
          {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Previous</button>} 
          {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
              return <span 
                key={p}
                className={currentPage === p ? s.selectedPage : ''}
                onClick={(e) => {onPageChanged(p) }}>{p}</span>
          })}
          {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>} 
        </div>
  );
};

export default Paginator;