import { setAllJobs } from '../../redux/jobSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import axios from 'axios';
import { COMPANY_API_END_POINT} from '../../utils/constant.js';
import { setSingleCompany } from '../../redux/companySlice.js';


const useGetCompanyById = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchSingleCompany = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get${companyId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleCompany(res.data.company))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleCompany();
    }, [dispatch]);
}

export default useGetCompanyById;
