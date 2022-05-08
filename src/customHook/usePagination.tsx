import { useMemo } from 'react';

interface Page {
    totalCount : number;
    currentPage : number;
    pageSize : number;
    siblingCount : number;

}

const range = (start : number, end : number ) => {
    let length = end - start + 1;

    return Array.from({length},(_,idx) => idx + start);
} 
export const usePagination = ({totalCount,pageSize,siblingCount = 1, currentPage} : Page) => {

    const paginationRange = useMemo(() => {

        const totalPageCount = Math.ceil(totalCount/pageSize);

        //siblingcount + firstpage + lastpage + currentpage + 2 dots
        //<- 1 , 2 , 3 ,4 ,5 ->
        const totalPageNumberDisplay = siblingCount + 5;
    

        // small num of page
        if (totalPageNumberDisplay >= totalPageCount ){
            return range(1, totalPageCount);
        }


        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min( currentPage + siblingCount, totalPageCount);


        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;


        // no left dot show  || right dot show
        // 1234....10
        if (!shouldShowLeftDots && shouldShowRightDots){
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, "dot", totalPageCount];
        }

        //left dots show || no right dot show
        //1...8910
        if (shouldShowLeftDots && !shouldShowRightDots){
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);

            return [firstPageIndex,"dot",...rightRange ];
        }


        //left show || right show
        //1...567...10
        if (shouldShowLeftDots && shouldShowRightDots){
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex,"dot",...middleRange,"dot",lastPageIndex];
        }

    },[totalCount,pageSize,siblingCount,currentPage]);


    return paginationRange;
}