import './pagination-item.css'

const PaginationItem = (props) => {
    const {numberPage, changeActiveNumberPage, currentPage} = props

    return (
        <div className="pagination-item">
            <button
                onClick={()=>changeActiveNumberPage(numberPage)}
                className={currentPage===numberPage ? "active-pagination-btn" : "pagination-btn"}>
                {numberPage}
            </button>
        </div>
    )
}

export default PaginationItem
