export interface IPokemon {
    id: number;
    name: string;
    type: string;
    weight: number;
    moves: string[];
    imageUrl: string;
  }
  
  export interface IPokemonDetailsProps {
    match: {
      params: {
        id: string;
      };
    };
  }
  
  export interface ISearchProps {
    onSearch: (query: string) => void;
  }
  
  export interface IFilterProps {
    onFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  
  export interface IPaginationProps {
    currentPage: number;
    itemsPerPage: number; 
    totalItems: number;
    onPageChange: (pageNumber: number) => void;
  }
  
  export interface IListProps {
    history: any;
  }
  
  export interface IRouteParams {
    id: string;
  }
  
  export interface IFilterOptions {
    moves: string[];
  }

  export interface IPaginationOptions {
    page: number;
    rowsPerPage: number;
  }
  