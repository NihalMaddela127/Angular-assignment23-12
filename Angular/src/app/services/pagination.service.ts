import * as _ from 'underscore';
export class PaginationService {
    getPager(totalItems: number, currentPage: number = 1, pageSize: number) {
    let totalPages = Math.ceil(totalItems / pageSize);
    let firstPage: number;
    let lastPage: number;
    if (totalPages <= pageSize) {
        firstPage = 1;
        lastPage = totalPages;
    } else {
        if (currentPage <= 6) {
            firstPage = 1;
            lastPage = pageSize;
        } else if (currentPage + 4 >= totalPages) {
            firstPage = totalPages - 9;
            lastPage = totalPages;
        } else {
            firstPage = currentPage - 5;
            lastPage = currentPage + 4;
        }
    }
    let firstIndex = (currentPage - 1) * pageSize;
    let lastIndex = Math.min(firstIndex + pageSize - 1, totalItems - 1);
    let pages = _.range(firstPage, lastPage + 1);
    return {startPage: firstPage, endPage: lastPage, startIndex: firstIndex, endIndex: lastIndex, pages: pages, currentPage: currentPage};
    }
}