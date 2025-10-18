'use client'
import '../../app/globals.css'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import {
  Line,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ComposedChart,
  Area,
  ResponsiveContainer,
  AreaChart
} from 'recharts';

interface ChartItem {
  price: string;
  irt_price: string;
  time: number;
  date: string;
  jdate: string;
  usd_price: string;
  coin: {
    currency_code: string;
    en_name: string;
    fa_name: string;
  };
  title: string;
}

interface ChartResponse {
  items: ChartItem[];
  status: number;
  success: boolean;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow text-sm">
        {payload.map((entry: any, index: number) => (

          <p key={index} style={{ color: entry.color }}>
            {index == 1 ? "$" + entry.value : entry.value + ' تومان'}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const Chart = (props: { id: string }) => {
  const currency_code = props.id;
  const [period, setPeriod]  = useState('24h')
  const body = {
    period,
    currency_code,
  };

  const fetchCoinChart = async () => {
    const res = await axios.post<ChartResponse>('https://b.wallet.ir/coinlist/chart', body);
    console.log(res.data)
  
    return res.data.items.map((item) => ({
      date: item.title,
      name: item.coin.fa_name,
      usdPrice: item.usd_price,
      price: parseFloat(item.price),
      irt_price: parseFloat(item.irt_price),
    }));
  };

  const { data, isPending } = useQuery({
    queryKey: ['coin', currency_code, period],
    queryFn: fetchCoinChart,
  });


  if (isPending) return <div className="p-4 text-center">در حال بارگذاری...</div>;

  return (
    <div className=" lg:mb-[108px] md:mb-[111px] mb-[39px] chart px-[66px] pt-[20px] pb-[11px] shadow ">
      <div className="flex justify-start lg:gap-[20px] mb-20">
        <span className="cursor-pointer" onClick={() => setPeriod('1d')}>24 ساعته</span>
        <span className="cursor-pointer" onClick={() => setPeriod('1w')}>1 هفته</span>
        <span className="cursor-pointer" onClick={() => setPeriod('1m')}>1 ماه</span>
        <span className="cursor-pointer" onClick={() => setPeriod('1y')}>1 سال</span>
      </div>

      <div className="w-full h-[386px] mb-[53px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 5, right: 0, bottom: 5, left: 0 }}>
            <CartesianGrid vertical={false} horizontal={true} />
            <YAxis
              yAxisId="left"
              orientation="left"
              axisLine={false}
              tickLine={false}
              domain={['auto', 'auto']}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              domain={['auto', 'auto']}
            />
            <Line yAxisId="left" dataKey="irt_price" stroke="#1652F0" dot={false} />
            <Area yAxisId="right" dataKey="price" stroke="#F7931A" fill="#FEF4E8" />
            <Tooltip content={<CustomTooltip />} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full h-[100px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 60, bottom: 5, left: 60 }}>
            <XAxis dataKey="date" axisLine={false} tickLine={false} />
            <YAxis hide domain={['auto', 'auto']} />
            <Area dataKey="usdPrice" stroke="#4BB543" fill="#F6FDF6" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className='flex justify-center items-center mt-[29px] gap-5'>
        <div className='flex justify-between items-center gap-3'>
          <span className='w-[7px] h-[7px] rounded-[50%] bg-[#4BB543] '></span>
          <span>نرخ دلار</span>
        </div>
        <div className='flex justify-between items-center gap-3'>
          <span className='w-[7px] h-[7px] rounded-[50%] bg-[#1652F0] '></span>
          <span>برابری</span>
          </div>
        <div className='flex justify-between items-center gap-3'>
          <span className='w-[7px] h-[7px] rounded-[50%] bg-[#F7931A] '></span>
          <span>قیمت <span>{data[0].name}</span></span>
          </div>
      </div>
    </div>
  );
};

export default Chart;
