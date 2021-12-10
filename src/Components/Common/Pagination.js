import React from 'react';
import Pagination from "react-js-pagination";

export default function PaginationComponent({ paginate, page, totalPosts, limit }) {
    const changePage = (selected) => {
        paginate(selected);
        window.scrollTo(0, 0)
    }
    return (
        <div className='pagination-component'>
            <Pagination
                totalItemsCount={totalPosts}
                itemsCountPerPage={limit}
                activePage={page}
                pageRangeDisplayed={10}
                onChange={changePage}
                hideFirstLastPages
                prevPageText="«"
                nextPageText="»"
                activeClass="pagination-active"
                innerClass="pagination-button"
            />
        </div>
    )
}
