// Generated by https://quicktype.io

export interface IMovie {
    rows:      Movie[];
    totalRows:   number;
    currentPage: number;
    firstPage:   number;
    lastPage:    number;
    totalPages:  number;
}

export interface Movie {
    id:        string;
    name:      string;
    budget:    number;
    date:      string;
    duration:  number;
    createdAt: string;
    updatedAt: string;
    deletedAt: null;
}