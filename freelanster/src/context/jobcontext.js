import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/jobReducer'
const JobContext = createContext();

const FilterJobs = ({ children }) => {
    // const [CardsData, setCardsData] = useState("");

    // const FetchJobs = async () => {
    //     try {
    //         const res = await fetch("/JobsFetch", {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });

    //         const data = await res.json();
    //         // console.log(data.data);
    //         setCardsData(data.data);
    //         console.log(CardsData);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    useEffect(() => {
        // FetchJobs();
        getJobs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const initialState = {
        isLoading: false,
        isError: false,
        jobs: [],
        isSingleLoading: false,
        singleJob: {},
    };

    // const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    // ALL JOBS
    const getJobs = async () => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await fetch("/JobsFetch", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const CardsData = await res.json();
            const jobs = CardsData.data            
            dispatch({ type: "SET_API_DATA", payload: jobs});
            // console.log(jobs);
            // console.log(data.data);
            // setCardsData(data.data);
            // console.log(CardsData); 
            // console.log(CardsData);
            // const jobs = CardsData;
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };


    // SINGLE JOB 
    const getSingleJob = async (_id) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await fetch("/JobsFetch", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const SingleCardData = await res.json();
            const singleJob = SingleCardData.data;
            dispatch({ type: "SET_SINGLE_JOB", payload: singleJob });
            // const res = await axios.get();
            // const singleProduct = await res.data;
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    }

    // useEffect(() => {
    //     getJobs();
    // }, []);

    return (<JobContext.Provider value={{ ...state, getJobs, getSingleJob }}>{children}</JobContext.Provider>);
};

// Custom Hooks
const useJobContext = () => {
    return useContext(JobContext);
};

export { JobContext, FilterJobs , useJobContext }