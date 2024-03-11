import { GET_IDS } from "./constants";
import {GET_ITEMS} from "./constants";
import { post } from "./authService"; 

export const getIdsForAllPages = () => post('', {"action":GET_IDS})
export const getIds=(act, par)=> post('', {
    "action": act,
    "params": par,
  })
export const getItem=(id)=>post('', {
    "action": GET_ITEMS,
    "params": { "ids": id },
  })