import { SortingByBrand } from './sortingByBrand/SortingByBrand';
import { SortingByTitle } from './sortingByTitle/SortingByTitle';
import { SortingByPrice } from './sortingByPrice/SortingByPrice';

export const SortingMenu = () =>{

    return(
        <div>
            <SortingByTitle/>
            <SortingByBrand/>
            <SortingByPrice/>
        </div>
    )
}