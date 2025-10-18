import React from 'react'
import Deatales from '@/components/deatales/Deatales'
import AboutProduct from '@/components/about-product/AboutProduct'
import AboutProduct2 from '@/components/about-product/AboutProduct2'
import FAQ from '@/components/faq/FAQ'
import Chart from '@/components/chart/Chart'

interface IDataleID {
  params: {id: string};
  searchParams: Promise<{}>;
}




function Page(props:IDataleID) {

  const { id} =  props.params


  return (
    <div className='flex justify-center'>
      <div className='container  lg:w-[1140px] md:w-[731px] w-[335px] '>
        <Deatales id={id}  />
        <AboutProduct id={id} />
        <Chart id={id}/>
        <AboutProduct2 id={id} />
        <FAQ/>
      </div>
    </div>
  )
}

export default Page