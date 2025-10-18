import React from 'react'
import { SlSocialYoutube } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";

export default function Footer() {
    return (


        <div className='bg-[#1B2A4E]   text-[#fff] lg:flex lg:flex-col items-center '>
            <div className='footer-top lg:flex lg:w-[1140px] md:w-[731] flex justify-between  md:border-b-[1px] flex-wrap  sm:flex-nowrap lg:pb-[40px] border-[rgba(255,255,255,0.4)] w-[335] min-w-[335px] mr-[15px] '>
                <div className='lg:h-[228px] lg:min-w-[352px] lg:w-[352px] lg:mt-[42px] md:min-w-[283px] md:w-[283px] md:mt-[52px] md:mr-[50px] md:mb-[30px] w-[335px] mt-[56px] border-b-[1px] border-[rgba(255,255,255,0.4)] pb-[22px] mb-[22px] sm:border-none'>
                    <img src="/images/logo_light.d1640c2f 1.png" alt="" width={132} height={64} />
                    <p className='lg:text-[15px] lg:leading-[30px] md:leading-[24px] md:text-[10px] leading-[24px] text-[10px] text-justify'>راهکارهای پرداخت ری در سال 2009 فعالیت خود را در زمینه سیستم های پرداخت بین المللی با وبسایت wallet.ir آغاز کرد. ری پرداخت با نام تجاری MGY INVESTMENT LTD با شماره ثبت ۷۳۶۵۰۶۳ در کشور انگلستان به ثبت رسید و فعالیت رسمی آغاز نمود.</p>
                </div>
                <div className='md:mr-[33]'>
                    <h3 className='lg:mt-[53px] lg:text-[20px] lg:mb-[25px] md:mt-[49px] text-[15px] md:mb-[29px] mb-[24px] '>لینک های مرتبط</h3>
                    <div className=' lg:gap-[19px] lg:text-[15px] flex flex-col gap-[25px] text-[11px]  '>
                        <a className='block' href="">صفحه اصلی</a>
                        <a className='block' href="">قیمت رمزارزها</a>
                        <a className='block' href="">مقالات و وبلاگ</a>
                        <a className='block' href="">درباره ما</a>
                    </div>
                </div>
                <div className='lg:mt-[109px] md:  lg:text-[15px] lg:gap-[19px] flex flex-col gap-[25px] text-[11px] md:mt-[105px] md:ml-[78px] mt-[46px] sm:mt-0 mx-auto sm:mx-0 '>
                    <a className='block' href="">سوالات متداول</a>
                    <a className='block' href="">شرایط و قوانین</a>
                    <a className='block' href="">فرصت های شغلی</a>
                    <a className='block' href="">انجمن</a>
                </div>
                <div className=''>
                    <h3 className='lg:mt-[53px] lg:text-[20px] lg:mb-[25px] md:mt-[49px] text-[15px] md:mb-[29px] md:ml-[50px] mb-[24px] '>تبادل ارز</h3>
                    <div className='lg:gap-[19px] lg:text-[15px] flex flex-col gap-[25px] text-[11px] '>
                        <a className='block' href="">خرید بیت کوین</a>
                        <a className='block' href="">خرید اتریوم</a>
                        <a className='block' href="">خرید ریپل</a>
                        <a className='block' href="">خرید سولانا</a>
                    </div>
                </div>
                <div className='lg:mt-[109px] lg:flex lg:flex-col lg:gap-[19px] '>
                    <a className='lg:block hidden' href="">خرید یوانس دی کوین</a>
                    <a className='lg:block hidden' href="">خرید چین لینک</a>
                    <a className='lg:block hidden' href="">خرید دوج کوین</a>
                    <a className='lg:block hidden' href="">خرید تتر</a>
                </div>
            </div>
            <div className=" flex justify-center ">
                <div className=' flex md:justify-between  justify-center lg:w-[1140px] lg:min-w-[1140px] lg:max-w-[1140px] lg:my-[31px] md:w-[731px] md:my-[24.5px]  flex-wrap sm:flex-nowrap'>
                    <div className='copy-write order-last sm:order-first sm:basis-[50%]'>
                        <p className='text-[10px]  lg:text-[15px] pt-[12px] pb-[25]  sm:py-0  sm:text-start '>تمامی حقوق این سرویس متعلق به مجموعهُ <b>ری پیمنت</b> است</p>
                    </div>
                    <div className='Platforms flex sm:basis-[50%]  lg:gap-[41px] md:gap-[18px] gap-[18px] sm:gap-[0px] order-first sm:order-last border-b-[1px] l border-[rgba(255,255,255,0.4)] w-[335px] sm:w-[100%] border-t-[1px] sm:border-none  py-5 mt-[32] sm:my-0 justify-center  sm:justify-end sm:py-0 text-center'>
                        <div className='border-[1px] border-[rgba(255,255,255,1)] rounded-[50%] lg:p-[12px] lg:w-[50px] lg:h-[50px] w-[32px] h-[31px] flex justify-center items-center '><a href=""><SlSocialYoutube className='lg:w-[24px] lg:h-[24px] md:w-[15.5px] md:h-[15.5px]  ' /></a></div>
                        <div className='border-[1px] border-[rgba(255,255,255,1)] rounded-[50%] lg:p-[12px] lg:w-[50px] lg:h-[50px] w-[32px] h-[31px] flex justify-center items-center'><a href=""><FiLinkedin className='lg:w-[24px] lg:h-[24px] md:w-[15.5px] md:h-[15.5px] ' /></a></div>
                        <div className='border-[1px] border-[rgba(255,255,255,1)] rounded-[50%] lg:p-[12px] lg:w-[50px] lg:h-[50px] w-[32px] h-[31px] flex justify-center items-center'><a href=""><CiTwitter className='lg:w-[24px] lg:h-[24px] md:w-[15.5px] md:h-[15.5px] ' /></a></div>
                        <div className='border-[1px] border-[rgba(255,255,255,1)] rounded-[50%] lg:p-[12px] lg:w-[50px] lg:h-[50px] w-[32px] h-[31px] flex justify-center items-center'><a href=""><SlSocialFacebook className='lg:w-[24px] lg:h-[24px] md:w-[15.5px] md:h-[15.5px] ' /></a></div>
                        <div className='border-[1px] border-[rgba(255,255,255,1)] rounded-[50%] lg:p-[12px] lg:w-[50px] lg:h-[50px] w-[32px] h-[31px] flex justify-center items-center'><a href=""><FaInstagram className='lg:w-[24px] lg:h-[24px] md:w-[15.5px] md:h-[15.5px] ' /></a></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
