'use client';
import { useState } from 'react';
import Image  from 'next/image';
import { ChevronDown, ChevronUp, } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: 'رمز ارز چیست؟',
    answer:
      'لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافی ....',
  },
  {
    question: 'آیا می‌توانم با کارت بانکی بیت کوین بخرم؟',
    answer:
      'بله، در برخی صرافی‌ها امکان خرید بیت کوین با کارت بانکی وجود دارد.',
  },
  {
    question: 'چرا باید از والت استفاده کنم؟',
    answer:
      'استفاده از کیف پول باعث امنیت بیشتر دارایی‌های دیجیتال شما می‌شود.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col items-center py-12 mb-[58px] ">
      <h2 className="lg:text-2xl  lg:text-right lg:w-[1140px] md:text-[30px] md:w-[734px] text-[20px]  W-[335px] mb-8  text-center font-bold">سوالات متداول</h2>

      <div className="lg:w-[1140px] md:w-[734px] flex flex-col gap-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl border ${
              openIndex === index ? 'border-[#F1F1F1]' : 'border-[#F1F1F1]'
            } transition-all duration-300 overflow-hidden`}
          >
            <button
              className="w-full flex justify-between items-center p-5 text-right"
              onClick={() => toggle(index)}
            >
              <span className="font-medium text-lg">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-600 leading-7 border-t border-[#F1F1F1]">
                {item.answer}
              </div>
            )}
          </div>
        ))}
        <div className='lg:w-[100%] flex justify-center items-center lg:gap-[38px] lg:py-[15px] md:py-[20px] md:gap-[29px] gap-[24px]  sm:flex-row flex-col py-[40px]  mt-[38px] bg-[#F8F9FA] rounded-2xl '>
            <div className='lg:w-[337px] lg:h-[337px] md:w-[265px] md:h-[265px] w-[196px] h-[196px] sm:order-first sm:mt-0 mt-[24px]  order-last relative '>
                <Image 
                src='/images/sammy-line-man-with-money 1.png'
                className=' object-contain'
                alt="Example"
                fill
                sizes="(max-width: 768px) 100vw, 750px"
                />
            </div>
            <div className='lg:w-[577px] lg:gap-[48px] md:w-[339px] md:gap-[26px]  w-[246px ] sm:items-start sm:order-last gap-[17px]  justify-center items-center  order-first flex flex-col '>
                <h3 className='lg:text-[25px] md:text-[20px] text-[16px] '>علاقه مند به خرید بیت کوین هستید؟</h3>
                <p className='lg:text-[17px] lg:leading-[48px] md:text-[15px] md:leading-[32px] text-[12px]  leading-[24px] text-center sm:text-right '>ما اینجا هستیم نا شما تجربه متفاوت از خرید و فروش بیت کوین داشته باشید.</p>
                <a className='py-[11px] px-[37px] bg-[#1652F0] rounded-4xl text-[#fff] inline cursor-pointer'>اکنون شروع کنید</a>
            </div>
        </div>
      </div>
    </section>
  );
}
