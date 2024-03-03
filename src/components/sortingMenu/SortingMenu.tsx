import { SortingByBrand } from './sortingByBrand/SortingByBrand';
import { SortingByTitle } from './sortingByTitle/SortingByTitle';
import { SortingByPrice } from './sortingByPrice/SortingByPrice';
import { ShowAllButton } from '../showAllButton/ShowAllButton';

export const SortingMenu = () =>{

    return(
        <div>
            <SortingByTitle/>
            <SortingByBrand/>
            <SortingByPrice/>
            <ShowAllButton/>
        </div>
    )
}