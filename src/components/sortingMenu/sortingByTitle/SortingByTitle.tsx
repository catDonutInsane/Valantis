import { AutoComplete} from 'antd';
import { products } from '../../../mock';
import { useAppDispatch } from '../../../hooks/hooks';
import { setParams, setPagDisable } from '../../../reducers/reducer';
import { params } from '../../../utils/setparams';
import { useState } from 'react';
import type { variant } from '../../../types/types';



export const SortingByTitle = () =>{
   const [variant, setVariant] = useState<variant>("filled")
    const dispatch = useAppDispatch()
    const filter = (title:string) =>{
        dispatch(setPagDisable(true))
       dispatch(setParams(params.getParamsTitle("filter",title))) 
    }
    return(
        <div>
            <AutoComplete
                        onSelect={(e)=>filter(e)}
                        style={{width:300}}
                        placeholder = "Введите название товара"
                        options={products}
                        filterOption={true}
                        variant={variant}
                        onFocus={(p)=>setVariant("outlined")}
                        onBlur={(p)=>setVariant("filled")}
                    />
        </div>
    )
}