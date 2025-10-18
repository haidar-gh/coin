'use client'

import React from 'react'
import axios, { AxiosResponse } from 'axios'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { FaExchangeAlt } from "react-icons/fa";

interface ResponseList {
    items: Coin[];
    total_page: number;
    page: number;
    count: number;
    limit: number;
    success: boolean;
    status: number;
}

interface Coin {
    id: number;
    currency_code: string;
    en_name: string;
    fa_name: string;
    price: string;
    rate: number;
    buy_irt_price: string;
    sell_irt_price: string;
    irt_price: string;
    daily_change_percent: string;
    icon: string;
    about: string;
}



export default function Deatales(props: { id: string }) {

    const body = {
        page: '1',
        limit: '1',
        search: props.id
    }

    const fetchCoin = async (): Promise<ResponseList> => {
        const res = await axios.post<any, AxiosResponse<ResponseList>>('https://b.wallet.ir/coinlist/list', body)

        return res.data


    }


    const { data, isPending } = useQuery({
        queryKey: ['coin'],
        queryFn: fetchCoin
    })


    return (

        <div className=' lg:py-3 lg:mb-[161px] lg:mt-[60px] md:mb-[59px] md:py-2 mb-[53px] flex basis-[100%] rounded-3xl shadow flex-wrap md:flex-nowrap px-[23px] sm:px-0'>
            <div className=' lg:pr-[33px] lg:pl-[45px] md:px-[26px] md:pr-[25px] flex md:basis-[50%] basis-[100%] flex-col '>


                <span className='lg:text-[15] lg:pt-[29px] md:pt-[41px] text-[13px] pt-[32px] '>قیمت لحظه ای :</span>
                <div className=' lg:mt-[26px] lg:mb-[33px] lg:pb-[25px] md:mt-[20px] md:mb-[17px] md:pb-[21px]  mt-[21px] mb-[24px] pb-[22px]  border-b-[1px] border-[#EBEBEB]  flex  justify-between items-center basis-[100%] '>
                    <div className='flex items-center '>
                        <div className='lg:w-[73px] lg:h-[73px] md:w-[61px] md:h-[61px] w-[43px] h-[43px] relative '>
                            <Image
                                className=' object-contain'
                                alt="Example"
                                fill
                                sizes="(max-width: 768px) 100vw, 750px"
                                src={data?.items[0].icon || '/images/bitcoin (1) 2.svg'}
                            />
                        </div>
                        <div className='lg:text-[15px] md:mr-3 md:gap-3 gap-2 mr-1.5 text-[13px] flex flex-col '>
                            <span>{data?.items[0].fa_name}</span>
                            <span>{data?.items[0].currency_code}</span>
                        </div>
                    </div>
                    <div className='lg:gap-3 lg:text-[15px] text-[13px] md:gap-3 gap-2 flex flex-col items-end  '>
                        <span>{data?.items[0].irt_price} تومان</span>
                        <span className='text-[#696464]'>${data?.items[0].price}</span>
                    </div>
                </div>

                <div className='lg:text-[14px] lg:gap-[17px] text-[12px] md:gap-[32px] gap-[25px] flex flex-col  md:mb-[42px] mb-[26px] border-b-[1px] border-[#EBEBEB] md:border-none pb-[30px] md:pb-0'>
                    <div className='flex justify-between'>
                        <p>تغییر قیمت امروز :</p>
                        <p><span className={`${Number(data?.items[0].daily_change_percent) < 0 ? 'text-[#FF6868]' : Number(data?.items[0].daily_change_percent) > 0 ? 'text-[#147D03]' : 'text-[#000]'}`}>{data?.items[0].daily_change_percent}</span>%</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>خرید {data?.items[0].fa_name} :</p>
                        <p><span className='text-[#147D03]'>{data?.items[0].buy_irt_price}</span> تومان</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>فروش {data?.items[0].fa_name} :</p>
                        <p><span className='text-[#FF6868]'>{data?.items[0].sell_irt_price}</span> تومان</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>بالاترین قیمت 24 ساعته :</p>
                        <p><span className='text-[#147D03]'>1.000.000.000</span> تومان</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>پایین ترین قیمت 24 ساعته :</p>
                        <p><span className='text-[#FF6868]'>1.000.000.000</span> تومان</p>
                    </div>
                </div>
            </div>
            <div className='flex md:basis-[50%] basis-[100%]  md:border-r-[1px] md:border-[#EBEBEB] lg:px-[40] md:px-[26px] '>
                <div className='basis-[100%] '>
                    <div className='flex basis-[100%] flex-col '>
                        <span className='lg:text-[14px] lg:pt-[29px] text-[12px] md:pt-[41px] '>ارسال می کنید:</span>
                        <div className='flex basis-[100%] mt-[18px] lg:text-[13px] text-[11px] lg:rounded-4xl rounded-lg bg-[#F6F4F4] h-[47px] min-h-[47px] px-[20px]'>
                            <input className='flex w-[50%] outline-none' type="text" placeholder='مقدار را وارد کنید' />
                            <select className='flex w-[50%] outline-none border-r-[1px] pr-[5px] border-[#EBEBEB]' name="" id="">
                                <option value="دلار">تومان</option>
                                <option value="دلار">دلار</option>
                                <option value="دلار">یورو</option>
                            </select>
                        </div>
                    </div>
                    <div className='basis-[100%] flex flex-row-reverse'>
                        <div className='lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] mt-[20px] w-[40px] h-[40px] bg-[#F6F4F4] rounded-[50%] flex justify-center items-center cursor-pointer self-end'>
                            <FaExchangeAlt className='rotate-90' />
                        </div>
                    </div>
                    <div className='flex basis-[100%] flex-col '>
                        <span className='lg:text-[14px] text-[12px]'>دریافت می کنید:</span>
                        <div className='flex basis-[100%] mt-[18px] lg:text-[13px] text-[11px] lg:rounded-4xl rounded-lg bg-[#F6F4F4] h-[47px] min-h-[47px] px-[20px]'>
                            <input className='flex w-[50%] outline-none' type="text" placeholder='مقدار نهایی' />
                            <select className='flex w-[50%] outline-none border-r-[1px] pr-[5px] border-[#EBEBEB]' name="" id="">
                                <option value="دلار">تومان</option>
                                <option value="دلار">دلار</option>
                                <option value="دلار">یورو</option>
                            </select>
                        </div>
                    </div>
                    <div className='lg:text-[15px] lg:gap-[15px] lg:mt-[25px] md:text-[13px] md:gap-[16px] md:mt-[16px] text-[11px] gap-[19px] mt-[16px] flex basis-[100%] flex-col   '>
                        <div className='flex justify-between'>
                            <p>نرخ ارز یک</p>
                            <p>5.600 دلار</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>نرخ ارز دو</p>
                            <p>49.750 تومان</p>
                        </div>
                    </div>
                    <div className='lg:mt-[20px] lg:mb-[37px] md:mt-[25px] md:mb-[35px] mt-[31px] mb-[21PX]  basis-[100%] flex justify-center items-center  ' >
                        <button className='basis-[100%] h-[47px] bg-[#1652F0] text-[#fff] rounded-lg  lg:border-[2px] lg:border-[#0D1A8E] lg:rounded-4xl cursor-pointer hover:lg:bg-[#0D1A8E] hover:text-[#fff] '>ادمه خرید</button>
                    </div>
                </div>
            </div>

        </div>


    )
}
