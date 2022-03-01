import './pagination.css'
import {calculateNumberOfPages, convertNumbersToArrays} from "../../utils/utils";
import {COUNT_ITEMS_ON_ONE_PAGE} from "../../service/api-service/api-consts";
import {useCallback} from "react";
import {changeNumberPage} from "../../redux/actions/products-actions";
import {useDispatch} from "react-redux";
import PaginationItem from "../pagination-item/pagination-item";

const Pagination = (props) => {

    const {totalCountItems, currentPage, numberOfProductsPerPage = COUNT_ITEMS_ON_ONE_PAGE} = props
    const dispatch = useDispatch()

    const changeActiveNumberPage = useCallback ((newNumberPage) => {
        dispatch(changeNumberPage(newNumberPage))
    },[])

    const numberOfPages = calculateNumberOfPages(totalCountItems, numberOfProductsPerPage)
    const convertNumber = convertNumbersToArrays(numberOfPages)
    const listOfPageNumbers = renderAListOfPageNumbers(convertNumber, currentPage, changeActiveNumberPage)

    return (
        <div className="pagination-block">
        {listOfPageNumbers}
        </div>
    )
}


const renderAListOfPageNumbers = (arrayNumber, currentPage ,callback) => {
    return arrayNumber.map(numberPage => {
        return (
            <PaginationItem
                numberPage={numberPage}
                currentPage={currentPage}
                changeActiveNumberPage={callback} />
        )
    })
}

export default Pagination

