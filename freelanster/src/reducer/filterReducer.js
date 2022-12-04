import { checkboxClasses } from "@mui/material";

const filterReducer = (state,action) =>{

    switch(action.type){
        case "LOAD_FILTER_JOBS":
            return{
                ...state,
                filter_jobs:[...action.payload],
                all_jobs:[...action.payload],
                // lol_jobs:[],
                title_jobs:[]
            };

        case "UPDATE_FILTER_VALUE":
            const {name,value}=action.payload;
            return{
                ...state,
                filters:{
                    ...state.filters,
                    [name]:value,
                },
                
            }

        case "FILTER_JOBS":
            let {all_jobs} = state;
            let tempFilterJobs = [...all_jobs];
            let titleFilterJobs =[...all_jobs];
            const { title, category } = state.filters;
           

            // if (searchQueryInput){
            //     tempFilterJobs = tempFilterJobs.filter((curElem)=>{
            //         return curElem.name.toLowerCase().include(searchQueryInput);
            //     });
            // }

            // if(title){
            //     tempFilterJobs = tempFilterJobs.filter((curElem)=>{
            //         return curElem.category === title;
            //     });
            // }
            

            if(title){
                tempFilterJobs = tempFilterJobs.filter((curElem) => curElem.title === title);
                // console.log("AFTER JOBS:", lol_jobs);
            }

        

            // if (category) {
                
            //         const lol_jobs = tempFilterJobs.filter((curElem) => curElem.category === category);
            //          console.log("AFTER JOBS:", lol_jobs);
            // }

            return{
                ...state,
                all_jobs: tempFilterJobs
            }
        default:
            return state;

    }
}

export default filterReducer;



