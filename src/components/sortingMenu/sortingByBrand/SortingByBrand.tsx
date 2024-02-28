import { AutoComplete} from 'antd'
import { useState } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { setParams,setPagDisable } from '../../../reducers/reducer';
import { params } from '../../../utils/setparams';
import { brands } from '../../../brand';
import type { variant } from '../../../types/types';


export const SortingByBrand = () =>{
    const [variant, setVariant] = useState<variant>("filled")
    const dispatch = useAppDispatch()
    const filter = (title:string) =>{
        dispatch(setPagDisable(true))
       dispatch(setParams(params.getParamsBrand("filter",title))) 
    }
    return(
        <div>
            <AutoComplete
                        onSelect={(e)=>filter(e)}
                        style={{width:300}}
                        placeholder = "Введите название бренда"
                        options={brands}
                        filterOption={true}
                        variant={variant}
                        onFocus={(p)=>setVariant("outlined")}
                        onBlur={(p)=>setVariant("filled")}
                    />
        </div>
    )
}
