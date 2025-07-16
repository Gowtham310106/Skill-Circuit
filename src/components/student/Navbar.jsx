import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const isCourseListPage = location.pathname.includes('/course-list');

  const { openSignIn } = useClerk();
  const { user } = useUser();
  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-1 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
    <div class="logo cursor-pointer" >
            <div class="logo-icon">
                <div class="circuit-brain">
                    <div class="circuit-lines">
                        <div class="circuit-line line-1"></div>
                        <div class="circuit-line line-2"></div>
                        <div class="circuit-line line-3"></div>
                        <div class="circuit-dot dot-1"></div>
                        <div class="circuit-dot dot-2"></div>
                        <div class="circuit-dot dot-3"></div>
                    </div>
                </div>
            </div>
            <div>
                <div class="logo-text">
                    <span class="skill-text">Skill</span><span class="circuit-text">Circuit</span>
                </div>
                <div class="tagline">Learn • Connect • Grow</div>
            </div>
        </div>
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
        <div className='flex items-center gap-5'>
          {user && <>
            <button>Become Educator</button>
            | <Link to='/my-enrollments'> My Enrollments</Link></>}
        </div>
        {user ? <UserButton /> :
          <button onClick={() => openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>
        }
      </div>
      {/* For Phone screens */}
      <div className='md:hidden flex items-centergap-2 sm:gap-5 text-gray-500'>
        <div className='flex items-center gap-1 sm:gap-2 max-smtext-xs'>
          {user && <>
            <button>Become Educator</button>
            | <Link to='/my-enrollments'> My Enrollments</Link></>
          }
        </div>
        {
          user ? <UserButton /> :

            <button onClick={() => openSignIn()}><img src={assets.user_icon} alt="" /></button>}

      </div>
    </div>
  )
}

export default Navbar