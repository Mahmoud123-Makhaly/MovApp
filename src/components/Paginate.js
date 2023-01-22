import React from 'react'
import ReactPaginate from 'react-paginate';
const Paginate = ({getPage,pageCount}) => {
    const handlePageClick = (data)=>{
        getPage(data.selected+1)
    }

  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={handlePageClick}
    pageRangeDisplayed={1}
    marginPagesDisplayed={1}
    pageCount={pageCount}
    previousLabel="< previous"
   containerClassName='pagination d-flex justify-content-center'
   breakClassName="page-item"
   breakLinkClassName='page-link'
   pageClassName="page-item"
   pageLinkClassName='page-link'
   previousClassName='page-item'
   previousLinkClassName='page-link'
   nextClassName='page-item'
   nextLinkClassName='page-link'
   activeClassName="active"
  />
  )
}

export default Paginate
