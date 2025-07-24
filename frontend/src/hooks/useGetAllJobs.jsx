import { setAllJobs } from '../../redux/jobSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import axios from 'axios';
import { JOB_API_END_POINT } from '../../utils/constant';


const useGetAllJobs = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllJobs();
    }, [dispatch]);
}

export default useGetAllJobs;
