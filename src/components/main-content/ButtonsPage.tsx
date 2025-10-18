import React, { Dispatch, SetStateAction } from 'react'

interface PropsBtn {
    i: number,
    setPage: Dispatch<SetStateAction<number>>,
    page: number
    data: ResponseList | undefined
}

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

export default function ButtonsPage({ i, page, setPage, data }: PropsBtn) {
    let first = Number(data?.total_page)
    first -= Number(first)
    return (
        <div key={i}>

            {i + 1 == first + 1 && page - 3 > first + 1 ? <span className='ml-2'>...</span> : null}
            <button
                className={`w-[31px] h-[31px] ${i + 1 === page ? 'bg-[#1652F0] text-[#fff] ' : 'bg-[#EEF2F5] text-[#000]'} rounded-[50%] lg:text-[16px] md:text-[14px] cursor-pointer`}
                onClick={() => setPage((p) => p = i + 1)}
                key={i}
            >
                {i + 1}
            </button>
            
                {i + 1 == data?.total_page && page + 3 < data?.total_page ? <span className='mr-2'>...</span> : null}
        </div>
    )
}
