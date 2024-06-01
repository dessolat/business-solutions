import { Component } from 'react';

import clsx from 'clsx';

type Props = {
  rowsPerPage: number;
  totalRows: number;
  currentPage: number;
  handlePageChange: (page: number) => () => void;
  className?: string;
};

type State = {};

export default class Pagination extends Component<Props, State> {
  state = {};

  render() {
    const { rowsPerPage, totalRows, currentPage, handlePageChange, className } = this.props;

    const pagesCount = Math.ceil(totalRows / rowsPerPage);

    const classes = clsx('text-blue-800 [&>button+button]:ml-2', className);
    return (
      <div className={classes}>
        <button className={currentPage === 1 ? 'font-bold' : ''} onClick={handlePageChange(1)}>
          1
        </button>
        {currentPage > 3 && pagesCount > 3 && <span>…</span>}
        {currentPage > 2 && <button onClick={handlePageChange(currentPage - 1)}>{currentPage - 1}</button>}
        {currentPage !== 1 && currentPage !== pagesCount && (
          <button className='font-bold' onClick={handlePageChange(currentPage)}>{currentPage}</button>
        )}
        {currentPage < pagesCount - 1 && <button onClick={handlePageChange(currentPage + 1)}>{currentPage + 1}</button>}
        {currentPage < pagesCount - 2 && pagesCount > 3 && <span>…</span>}
        {pagesCount > 1 && (
          <button className={currentPage === pagesCount ? 'font-bold' : ''} onClick={handlePageChange(pagesCount)}>{pagesCount}</button>
        )}
      </div>
    );
  }
}
