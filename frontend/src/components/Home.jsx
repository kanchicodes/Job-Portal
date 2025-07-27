import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
// import CtegoryCarousel from './CtegoryCarousel'
import  LatestJob  from './LatestJob'
import Footer from './Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  useGetAllJobs();
  const {user}=useSelector(state=>state.auth);
  const navigate=useNavigate();
  useEffect(()=>{
    if(user?.role === "recruiter"){
      navigate("/admin/companies");
    }
  },[]);
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        {/* <CtegoryCarousel/> */}
        <LatestJob/>
        <Footer/>
    </div>
  )
}
export default Home;