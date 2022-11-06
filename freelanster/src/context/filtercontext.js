import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useJobContext } from "./jobcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_jobs:[],
    all_jobs:[],
};

export const FilterContextProvider=({children})=>{
    const {jobs} = useJobContext();

    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(()=>{
        dispatch({ type: "LOAD_FILTER_JOBS", payload: jobs });
    }, [jobs]);

    return(
       <FilterContext.Provider value={{...state }}>
    {children}
    </FilterContext.Provider>
    );
};


export const useFilterContext=()=>{
    return useContext(FilterContext);
};