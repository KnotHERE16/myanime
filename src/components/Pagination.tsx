import { usePagination } from "../customHook/usePagination";
import { v1 as uuidv1 } from "uuid";
interface Paginate {
    totalCount : number;
    currentPage : number;
    pageSize : number;
    onPageChange : any;
    siblingCount ?: number;

}
const Pagination = (props : Paginate) => {


    const {onPageChange,totalCount,siblingCount = 1,currentPage,pageSize} = props;

    const paginationArray = usePagination({
        totalCount,
        pageSize,
        siblingCount,
        currentPage
    });

    if(!paginationArray){
        return null;
    }

    if (currentPage === 0 || paginationArray.length < 2){
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    }

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    }

    let lastPage = paginationArray[paginationArray.length - 1];

    return (
        <ul className={"flex space-x-2 "}>

            <li key={uuidv1()} className=""  onClick={onPrevious}>
            <button className="hover:bg-gray-400 disabled:hover:bg-gray-300 flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md" disabled = {currentPage === 1}>&#171;</button>
            </li>

            {paginationArray.map( pageNumber => {

                if (pageNumber === "dot"){
                    return <li key={uuidv1()} className="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">...</li>
                }

                return (
                    <li key={uuidv1()} className={"hover:bg-gray-400  flex items-center px-4 py-2 rounded-md text-gray-500 " + (pageNumber === currentPage ? "bg-blue-400" : "text-gray-500 bg-gray-300")} onClick={() => onPageChange(pageNumber)}>{pageNumber}</li>
                )
            })}

            <li  key={uuidv1()} className=""  onClick={onNext}>
            <button className="hover:bg-gray-400 flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md disabled:hover:bg-gray-300" disabled = {currentPage === lastPage}>&#187;</button>
            </li>
        </ul>
    )

}

export default Pagination;