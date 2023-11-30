import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/freelancerReducer";
const FreelancerContext = createContext();

const FilterFreelancer = ({ children }) => {

    useEffect(() => {
        getFreelancer();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const initialState = {
        isLoading: false,
        isError: false,
        freelancer: [],

    };

    const [state, dispatch] = useReducer(reducer, initialState);

    // ALL JOBS
    const getFreelancer = async () => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await fetch(process.env.BACKEND_URL+"/FreelancersFetch", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const FreelancerData = await res.json();
            const freelancer = FreelancerData.data
            dispatch({ type: "SET_API_DATA", payload: freelancer });
            console.log(freelancer);
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };

    return (<FreelancerContext.Provider value={{ ...state, getFreelancer }}>{children}</FreelancerContext.Provider>);
};

// Custom Hooks
const useFreelancerContext = () => {
    return useContext(FreelancerContext);
};

export { FreelancerContext, FilterFreelancer, useFreelancerContext }