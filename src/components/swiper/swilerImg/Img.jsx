import React from 'react'
import swiperimg from '../../../images/swiper.svg'
import Image from 'next/image'

const Img = () => {
  return (
    <div className=' hover:text-[#595DD2]'>
      <Image src={swiperimg} />
    </div>
  )
}

export default Img
