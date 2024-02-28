export type Item ={
    brand: string,
    id: string,
    price: number,
    product: string
}

 export type IS = {
    itemList:string[],
    fullInfoList:Item[],
    isLoading:boolean,
    totalCount:number,
    pagDisable:boolean,
    pageSize:number,
    param:ParamsActionType,
    paramsToGetTotalCount:ParamsActionType,
    
    
}

export type ActionType = "filter" | "get_ids" | "get_items"
export type ParamsType = {
    product?:string,
    brand?:string,
    price?:number,
    offset?:number,
    limit?:number
    
}
export interface ParamsActionType{
    action:ActionType,
    params:ParamsType
}

export type variant= "outlined" | "borderless" | "filled" | undefined