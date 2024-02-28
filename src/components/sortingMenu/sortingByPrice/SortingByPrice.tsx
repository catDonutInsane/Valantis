import { AutoComplete} from 'antd';
import { useState } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { setParams,setPagDisable} from '../../../reducers/reducer';
import { params } from '../../../utils/setparams';
import { prices } from '../../../price';
import type { variant } from '../../../types/types';
export const SortingByPrice = () =>{

    const [variant, setVariant] = useState<variant>("filled")
    const dispatch = useAppDispatch()
    const filter = (title:number) =>{
        dispatch(setPagDisable(true))
       dispatch(setParams(params.getParamsPrice("filter",title))) 
    }
    return(
        <div>
            <AutoComplete
                        onSelect={(e)=>filter(e)}                        
                        style={{width:300}}
                        placeholder = "Введите цену"
                        options={prices}
                        filterOption={true}
                        variant={variant}
                        onFocus={(p)=>setVariant("outlined")}
                        onBlur={(p)=>setVariant("filled")}
                    />
        </div>
    )
}