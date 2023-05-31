import React from 'react';
import './PageComponent.css';

const PageComponent = ({ pageNumber, changePages, totalPages }) => {
  const pagesArray = Array(totalPages)
    .fill()
    .map((_, index) => index + 1);

  return (
    <div className="container__pagination">
      <button className="pagination__arrow" onClick={() => changePages(pageNumber - 1)}>
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <div className="pagination__pages">
        {pagesArray.map((i) => (
          <button
            className={
              i === pageNumber
                ? 'pagination__current-page pagination__current--active'
                : 'pagination__current-page'
            }
            key={i}
            onClick={() => changePages(i)}
          >
            {i}
          </button>
        ))}
      </div>
      <button className="pagination__arrow" onClick={() => changePages(pageNumber + 1)}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default PageComponent;
