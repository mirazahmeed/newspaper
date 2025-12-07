import React from 'react'
import SocialLogin from './SocialLogin'
import FindUs from './FindUs'

const RightAside = () => {
  return (
    <div className='flex flex-col gap-4'>
      <SocialLogin />
      <FindUs />
    </div>
  )
}

export default RightAside