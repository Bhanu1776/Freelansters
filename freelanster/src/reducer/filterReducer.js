const filterReducer = (state,action) =>{

    switch(action.type){
        case "LOAD_FILTER_JOBS":
            return{
                ...state,
                filter_jobs:[...action.payload],
                all_jobs:[...action.payload],
            };

        // case "GET_SORTBY_JOB_DURATION":
        //     let usersortjobdur = document.getElementById("cate-post-time");
        //     let sort_jobdur_value = usersortjobdur.option[usersortjobdur.selectedIndex].value;
        //     console.log(sort_jobdur_value)
        //     return{
        //         ...state,
        //         sorting_jobdur: sort_jobdur_value,
        //     }


        // case "SORTING_JOBS_DURATION":
        //     let newSortJobDur;
        //     let tempSortJobDur =[...action.payload];

        //     if (state.sorting_jobdur ==="All Durations")
        //     {
        //         newSortJobDur = tempSortJobDur.sort((a,b)=>
        //             a.date.localCompare(b.date));
        //     }

        //     if (state.sorting_jobdur === "hourly") {
        //         newSortJobDur = tempSortJobDur.sort((a, b) =>
        //             a.date.localCompare(b.date));
        //     }

        //     if (state.sorting_jobdur === "Less than a week") {
        //         newSortJobDur = tempSortJobDur.sort((a, b) =>
        //             a.date.localCompare(b.date));
        //     }

        //     if (state.ssorting_jobdur ==="1 to 4 weeks") {
        //         newSortJobDur = tempSortJobDur.sort((a, b) =>
        //             a.date.localCompare(b.date));
        //     }

        //     if (state.sorting_jobdur === "1 to 3 months") {
        //         newSortJobDur = tempSortJobDur.sort((a, b) =>
        //             a.date.localCompare(b.date));
        //     }
            
        //     if (state.sorting_jobdur === "3 to 6 months") {
        //         newSortJobDur = tempSortJobDur.sort((a, b) =>
        //             a.date.localCompare(b.date));
        //     }

        //     if (state.sorting_jobdur === "Over 6 months") {
        //         newSortJobDur = tempSortJobDur.sort((a, b) =>
        //             a.date.localCompare(b.date));
        //     }

        //     return {
        //         ...state,
        //         fiter_jobs:newSortJobDur,
        //     }

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
            const { searchQueryInput, title, category } = state.filters;

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
                console.log(`IN UPDATE FILTER: ${title}`)
                tempFilterJobs = tempFilterJobs.filter((curElem) => curElem.title === title);
            }

            return{
                ...state,
                all_jobs:tempFilterJobs,
            }
        default:
            return state;

    }
}

export default filterReducer;



