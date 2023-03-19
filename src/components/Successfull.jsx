import React from 'react'
import completed from '../assets/completed.png'

const Successfull = () => {
  return (
 <>

    <div className='flex justify-center items-center mt-28 '>
     <img src={completed} className='w-40 h-40'/>
     <p className='w-64'>با تشکر از پرداخت شما سفارش شما ثبت شده و جهت هماهنگی ارسال با شما تماس گرفته خواهد شد</p>
    </div>
 </>
  )
}

export default Successfull
