import { Pagination } from 'antd';
import type { PaginationProps } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {  setParams } from '../../reducers/reducer';
import { params } from '../../utils/setparams';
import { useEffect, useState } from 'react';

export const PaginationBar = () =>{
    const [offset, setOffset] = useState(0)
    const {totalCount,pagDisable} = useAppSelector(state => state.reducer)
    const dispatch = useAppDispatch()
   
    useEffect(()=>{
        dispatch(setParams(params.getParamsForAll(offset,"get_ids",50)))
    },[offset])
   
    const pagHandler: PaginationProps['onChange']= (page:number,t:number) =>{
            setOffset((page-1)*50)
    }
    

    return(
        <Pagination 
                disabled={pagDisable}
                pageSize={50}
                onChange={(e,p)=>pagHandler(e,p)} 
                defaultCurrent={1}                 
                total={totalCount}/>
    )
}