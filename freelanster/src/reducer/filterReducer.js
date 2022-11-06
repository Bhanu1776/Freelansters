// import { useFilterContext } from "../context/filtercontext";

const filterReducer = (state,action) =>{

    switch(action.type){
        case "LOAD_FILTER_JOBS":
            return{
                ...state,
                filter_jobs:[...action.action.payload],
                all_jobs:[...action.payload],
            };

        default:
            return state;

    }
}

export default filterReducer;



