'use client';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import ButtonsPage from './ButtonsPage';
import SearchInput from './SearchInput';
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';


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

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}





export default function CoinsTable() {

  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [openItem, setOpenItem] = useState('')


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchValue)
      setPage(1)
    }, 250)
  }, [searchValue])

  const fetchCoins = async (): Promise<ResponseList> => {

    const body = {
      page: String(page),
      limit: '9',
      search: debouncedSearch
    }

    const res = await axios.post<any, AxiosResponse<ResponseList>>(
      'https://b.wallet.ir/coinlist/list', body

    );
    return res.data;
  };


  const { data, isPending, isError } = useQuery({
    queryKey: ['coins', page, debouncedSearch],
    queryFn: fetchCoins,

  });




  return (
    <>

      <div className="overflow-x-auto flex justify-center lg:mt-[41px] md:mt-[15px] mt-[12px] ">
        <div className="container lg:w-[1140px] md:w-[731px] w-[335px]">
          <table className="w-full text-right  lg:table md:table sm:table hidden">
            <thead className='lg:h-[80px] '>
              <tr className="bg-gray-100 text-gray-700  text-center">
                <th className="lg:py-5 lg:pl-4 lg:text-start  md:text-center lg:pr-[45px] md:ml-[25px] lg:text-[15px] md:text-[13px] ">نام رمز ارز</th>
                <th className="lg:py-5 lg:px-4  text-center lg:text-[15px] md:pl-4 lg:pl-0  md:text-[13px] ">ارزش دلاری</th>
                <th className="lg:py-5 lg:px-4  text-center lg:text-[15px] md:text-[13px]">تغییر روزانه</th>
                <th className="lg:py-5 lg:px-4  text-center lg:text-[15px] md:text-[13px]">خرید از والت</th>
                <th className="lg:py-5 lg:px-4  text-center lg:text-[15px] mr-[50px]  md:text-[13px]">فروش به والت</th>
                <th className='lg:px-[10px] lg:py-[10px] lg:text-[15px] lg:translate-x-[-18%] md:translate-x-[-45%] lg:w-[244px] md:w-[130px] md:px-8 md:text-[13px] md:mt-[11px]  md:mb-[12px] md:ml-[14px] md:flex justify-end '>
                  <SearchInput value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                </th>
              </tr>
            </thead>

            <tbody>
              {isError ? <tr><td>خطا در داده</td></tr> : null}
              {isPending ? <tr><td>loadin...</td></tr> : null}
              {data?.items.map((coin) => (
                <tr key={coin.id} className="hover:bg-gray-50 transition-colors even:bg-[#F7F7F7] lg:h-[97px] ">
                  <td className="  lg:px-4 lg:h-[97px] lg:text-[15px] md:text-[11px] md:pr-2.5 flex items-center gap-2 text-center">
                    <Image
                      src={coin.icon}
                      alt={coin.en_name}
                      width={37}
                      height={37}
                    />
                    <div className="flex flex-col">
                      <span className="font-medium">{coin.fa_name}</span>
                      <span className="text-gray-500 text-xs">{coin.currency_code}</span>
                    </div>
                  </td>
                  <td className="py-3 lg:px-4 lg:text-[15px] md:text-[11px] text-center md:pl-4 lg:pl-0">{coin.price}</td>
                  <td
                    className={`lg:py- plg:x-4 lg:text-[15px] md:text-[11px] font-semibold text-center ${Number(coin.daily_change_percent) > 0
                      ? 'text-green-500'
                      : Number(coin.daily_change_percent) < 0
                        ? 'text-red-500'
                        : 'text-gray-600'
                      }`}
                  >
                    {coin.daily_change_percent}%
                  </td>
                  <td className="py-3 lg:px-4 lg:text-[15px] md:text-[11px] text-center">{coin.buy_irt_price} تومان</td>
                  <td className="py-3 lg:px-4 lg:text-[15px] md:text-[11px] text-center">{coin.sell_irt_price} تومان</td>
                  <td className="py-3 lg:px-4 flex justify-center items-center lg:h-[97px] " >
                    <Link href={`deatales/${coin.currency_code}`} className="bg-blue-600 text-white lg:px-[46px] flex items-center md:w-[130px] md:h-[47px] lg:py-2 rounded-lg  hover:bg-blue-700 transition cursor-pointer ">
                      معامله
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>



          <div className='block sm:hidden'>
            <div className='flex justify-around bg-[#E3E7EC] w-[335px] h-[64px] items-center rounded-lg'>
              <p className='text-[13px]'>نام رمز ارز</p>
              <p className='text-[13px]'>ارزش دلاری</p>
              <p className='text-[13px]'>تغییر روزانه</p>
            </div>
            {data?.items.map((item) => {
              return (

                <div className='px-[13] bg-[#F7F7F7] mb-3.5' onClick={() => setOpenItem(item.currency_code)} key={item.id}>
                  <div className='flex justify-around items-center py-[16px]'>
                    <div className='flex items-center flex-1'>
                      <div>
                        <Image
                          src={item.icon}
                          alt={item.en_name}
                          width={33}
                          height={33}
                        />
                      </div>
                      <div className='flex flex-col text-[10px]'>
                        <span className='mr-1.5 line-clamp-1'>{item.fa_name}</span>
                        <span className='text-[#696464] mt-[5px] mr-1.5'>{item.currency_code}</span>
                      </div>

                    </div>
                    <div className='flex-1'>
                      <span className='text-[11px] mr-[38px] '>${item.price}</span>
                    </div>
                    <div className='flex-1'>
                      <span className={`text-[11px] mr-[85px] ${Number(item.daily_change_percent) < 0 ? 'text-[#EF4040]' : Number(item.daily_change_percent) > 0 ? 'text-green-500' : 'text-[#000]'} `}>{item.daily_change_percent}%</span>
                    </div>

                  </div>
                  <AnimatePresence>
                    {openItem == item.currency_code ?
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className='flex justify-between text-[11px] mb-[17px]'>
                          <p>فروش به والت :</p>
                          <p>{item.sell_irt_price} تومان  </p>
                        </div>
                        <div className='flex justify-between text-[11px] mb-[26px]'>
                          <p>خرید از والت :</p>
                          <p>{item.buy_irt_price} تومان  </p>
                        </div>
                        <div className='w-full flex '>
                            <Link href={`deatales/${item.currency_code}`} className='w-full h-[47px] flex justify-center items-center  cursor-pointer  text-[#fff] bg-[#1652F0] rounded-lg'>معامله</Link>
                        </div>
                      </motion.div>
                      : null}
                  </AnimatePresence>
                </div>
              )
            })}

          </div>
        </div>
      </div>
      <div className="flex justify-center gap-[10px] flex-row-reverse ">
        {Array.from({ length: data?.total_page ?? 0 }, (_, i) => {
          let first = Number(data?.total_page) - Number(data?.total_page)
          if (first + 1 == i + 1 || i + 1 == page - 2 || i + 1 == page - 1 || i + 1 == page || i + 1 == page + 1 || i + 1 == page + 2 || i + 1 == data?.total_page) {
            return <div key={i}>

              <ButtonsPage key={i + 1} i={i} page={page} setPage={setPage} data={data} />

            </div>


          }
        })}
      </div>
    </>
  );
}
