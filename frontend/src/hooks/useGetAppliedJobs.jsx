import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Application_API_END_POINT } from "../../utils/constant.js";
import { setAllAppliedJobs } from "../../redux/jobSlice.js";


const useGetAppliedJobs = () => {
    const dispatch = useDispatch();
        const {searchedQuery} = useSelector(store=>store.job)
    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                const res = await axios.get(`${Application_API_END_POINT}/get?keyword=${searchedQuery}`, { withCredentials: true });
                console.log(res.data);

                if (res.data.success) {
                    dispatch(setAllAppliedJobs(res.data.application))
                }
            } catch (error) {
                console.log(error);

            }
        }
        fetchAppliedJobs();
    }, [])
}
export default useGetAppliedJobs;