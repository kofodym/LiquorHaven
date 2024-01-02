import React from 'react'
import NavBar from '../Components/NavBar'
import WhoWeAre from '../Components/WhoWeAre'
import WhyLiquorHaven from '../Components/WhyLiquorHaven'
import MeetOurTeam from '../Components/MeetOurTeam'

function AboutUs() {
  return (
    <div className='font-rubik'>
        <div className='flex justify-center items-center bg-[#E66B66] py-[24px] h-[60px] md:h-[70px] lg:h-[80px]'>
          <div className='text-[20px] text-white font-semibold'>Home</div>
          <img src='../src/assets/navigate_next.svg' />
          <div className=''>About Us</div>
        </div>
        <WhoWeAre />
        <WhyLiquorHaven />
        <MeetOurTeam />
    </div>
  )
}

export default AboutUs