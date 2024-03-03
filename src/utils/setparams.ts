import { ActionType, ParamsActionType} from "../types/types";
export const params ={
     getParamsForAll (offset:number,action:ActionType,limit:number):ParamsActionType{
        return {
            "action":action,
            "params":{
                "offset":offset,
                "limit": limit
            }
            
        }
    },
    getParamsTitle (action:ActionType,product:string):ParamsActionType{
        return {
            "action":action,
            "params":{
                "product":product,
            }
            
        }
    },
    getParamsPrice (action:ActionType,price:number):ParamsActionType{
        return {
            "action":action,
            "params":{
                "price":price
            }
            
        }
    },
    getParamsBrand (action:ActionType,brand:string):ParamsActionType{
        return {
            "action":action,
            "params":{
                "brand":brand
            }
            
        }
    },
    

}