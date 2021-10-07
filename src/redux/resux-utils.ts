import {useDispatch} from "react-redux";
import {AppDispatchType} from "./types";
import {ActionCreatorsMapObject, bindActionCreators} from "@reduxjs/toolkit";
import {useMemo} from "react";

export function useActions<T extends ActionCreatorsMapObject<any>>(actions: T) {
    const dispatch = useAppDispatch()

    const boundActions = useMemo(() => {
        return bindActionCreators(actions, dispatch)
    }, [])

    return boundActions
}

export const useAppDispatch = () => useDispatch<AppDispatchType>()
