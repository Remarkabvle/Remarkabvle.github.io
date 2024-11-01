import React from 'react'
import productlogo from '../../images/productlogo.svg'
import Image from 'next/image'

const ProductLogo = () => {
  return (
    <div className='bg-[#575ac6] shamow productLogo w-20 h-20 flex items-center justify-center border rounded-[110px] border-[3px] border-white'>
        <Image src={productlogo} />
    </div>
  )
}

export default ProductLogo
