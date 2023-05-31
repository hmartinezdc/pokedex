import { useState } from 'react';
export const usePagination = (list, quantityPerPage) => {
  const [pageNumber, setPageNumber] = useState(1);

  const lowerLimite = quantityPerPage * (pageNumber - 1);
  const upperLimite = quantityPerPage * pageNumber - 1;
  const totalPages = Math.ceil(list.length / quantityPerPage);

  const listSlice = list.slice(lowerLimite, upperLimite + 1);

  const changePages = (page) => {
    if (page > totalPages) setPageNumber(totalPages);
    else if (page < 1) setPageNumber(1);
    else setPageNumber(page);
  };

  return [pageNumber, listSlice, changePages, totalPages];
};
