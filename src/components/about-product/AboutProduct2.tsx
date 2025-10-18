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


export default function AboutProduct2(props:{id:string}) {

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
        <div className='lg:mb-[108px] md:mb-[73px] mb-[60px]  '>
            <h2 className=' lg:mb-[49px] lg:text-start md:text-[28px] md:mb-[36px] mb-[39px] text-[20px] text-center  '>توضیحات بیشتر درباره {data?.items[0].fa_name}</h2>
            <p className='lg:text-[16px] lg:leading-[32px] md:text-[14px] text-[12px] leading-[28px]  text-justify'>{data?.items[0].about}</p>
            <p className='lg:text-[16px] lg:leading-[32px] md:text-[14px] text-[12px] leading-[28px]  text-justify'>{data?.items[0].about}</p>
        </div>
    )
}
