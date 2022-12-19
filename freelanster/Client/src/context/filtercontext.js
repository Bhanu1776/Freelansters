import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useJobContext } from "./jobcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_jobs:[],
    all_jobs:[],
    filters:{
        searchQueryInput:"",
        title: "all",
        category: "all",
    },
};

export const FilterContextProvider=({children})=>{
    const {jobs} = useJobContext();

    const [state,dispatch] = useReducer(reducer,initialState);
    
    useEffect(()=>{
            dispatch({ type: "LOAD_FILTER_JOBS", payload: jobs });
    }, [jobs, ]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_JOBS", payload: jobs });
        dispatch({ type: "FILTER_JOBS"})      
    }, [state.filters])    
    

 


    // SEARCHING JOBS
    const updateFilterValue = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: {name, value}})
    };

    
    return(
       <FilterContext.Provider value={{...state,updateFilterValue }}>
    {children}
    </FilterContext.Provider>
    );
};


export const useFilterContext = ()=>{
    return useContext(FilterContext);
};