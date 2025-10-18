'use client'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios';
import React from 'react'
import axios from 'axios';
import Image from 'next/image';

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






export default function AboutProduct(props: { id: string }) {

    const body = {
        page: '1',
        limit: '1',
        search: props.id
    }

    const fetchCoin = async (): Promise<ResponseList> => {
        const res = await axios.post<any, AxiosResponse<ResponseList>>('https://b.wallet.ir/coinlist/list', body)
        console.log(res.data.items[0]);

        return res.data


    }

    const { data, isPending } = useQuery({
        queryKey: ['coin'],
        queryFn: fetchCoin
    })



    return (
        <div className='lg:gap-[30px] lg:mb-[116px] md:gap-[47px] md:mb-[137px] mb-[58px] gap-[35px]  flex-col  flex justify-between items-center'>
            <div className=' lg:order-1 order-3'>
                <h2 className='lg:text-[28px] lg:mb-[29px] lg:block hidden'>درباره <a className='text-[#0D1A8E]'>{data?.items[0].fa_name}</a></h2>
                <p className='lg:text-[16px] lg:leading-[32px] md:leading-[28px] text-[12px] leading-[28px] text-justify '>{data?.items[0].about}</p>
            </div>
            <div className='md:min-w-[555px]  md:h-[321] w-[335] h-[195px]  order-2 relative'>
                <Image
                    src='/images/Group 559.png'
                    className=' object-contain'
                    alt="Example"
                    fill
                    sizes="(max-width: 768px) 100vw, 750px"
                />
            </div>
            <h2 className=' lg:hidden lg:order-3 md:text-[25px] text-[20px]   order-1 '>درباره <a className='text-[#0D1A8E]'>{data?.items[0].fa_name}</a></h2>
        </div>
    )
}

