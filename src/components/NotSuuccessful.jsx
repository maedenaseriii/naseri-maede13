import React from 'react'
import cancle from '../assets/cancle.png'

const NotSuuccessful = () => {
  return (
 <>
    <div className='flex justify-center items-center mt-28 '>
     <img src={cancle} className='w-40 h-40'/>
     <p className='w-64'>پرداخت موفقیت آمیز نبود سفارش شما در انتظار پرداخت است.</p> 
    </div>
 </>
  )
}

export default NotSuuccessful
