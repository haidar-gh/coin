"use client"
import React, { useEffect, useState } from 'react'
import Table from './Table'
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export default function MainContent() {
    const [width, setWidth] = useState<number>(0)
    const [open, setOpen] = useState(false)

    interface ItabArray {
        id: number,
        title: string,
        activate: boolean
    }

    const [tabs, setTabs] = useState<ItabArray[]>([
        { id: 1, title: "دیفای", activate: true },
        { id: 2, title: "حریم خصوصی", activate: false },
        { id: 3, title: "متاورس", activate: false },
        { id: 4, title: "فابل استخراج", activate: false },
        { id: 5, title: "میم کوین", activate: false },
        { id: 6, title: "استیبل کوین", activate: false },
        { id: 7, title: "توکن", activate: false },
        { id: 8, title: "ICO", activate: false },
    ])

    useEffect(() => {
        setWidth(window.innerWidth);

        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);


    }, []);



    const clickTapHandler = (tabitem: ItabArray) => {
        setTabs(tabs.map(item => ({
            ...item,
            activate: item.title === tabitem.title

        })))

        setOpen(false)
    }

    const activeTab = tabs.find((t) => t.activate);

    return (
        <>
            <div className='flex justify-center'>
                <div className="container justify-center lg:w-[1140px] md:w-[731px] w-[335px] ">
                    <h1 className='lg:text-[40px] text-center lg:mt-[96px] lg:mb-[83px] md:text-[30px] md:mb-[53px] md:mt-[61px] text-[20px] mb-[32px]'>لیست قیمت های لحظه‌ای ارز دیجتال</h1>
                    <ul className='flex justify-between'>


                        {width > 640 && tabs.map((item) => {
                            return <li onClick={() => clickTapHandler(item)} className={`lg:w-[130px] lg:text-[13px]  md:h-[47px] md:w-[85px] md:text-[11px] md:flex md:justify-center md:items-center md:cursor-pointer rounded-lg ${item.activate == true ? "text-[#fff]" : "text-[#000]"}  ${item.activate == true ? "bg-[#1652F0]" : "bg-[#F7F7F7]"}`} key={item.id} >{item.title}</li>
                        })}

                        {width < 640 && (
                            <li className="relative w-full">
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="w-full border-none outline-none flex justify-between items-center bg-[#1652F0] text-[#fff] px-3 py-4 text-[11px] rounded-lg mb-1.5"
                                >
                                    <span>{activeTab?.title}</span>
                                    <MdKeyboardArrowDown size={16} />
                                </button>

                                {open && (
                                    <motion.ul
                                        initial={{  y: -50 }}
                                        animate={{  y: 0 }}
                                        exit={{  y: -10 }}
                                        transition={{ duration: 0.1, ease: "easeInOut" }}
                                        className=" mt-2 w-full bg-white rounded-lg z-10 overflow-hidden"
                                    >

                                        {tabs.map((item) => (
                                            <li
                                                key={item.id}
                                                onClick={() => clickTapHandler(item)}
                                                className={`  px-3 py-2 cursor-pointer hover:bg-[#1652F0] hover:text-white rounded-md ${item.activate
                                                    ? "bg-[#1652F0] text-white"
                                                    : "text-[#000] even:bg-[#F7F7F7]"
                                                    }`}
                                            >
                                                {item.title}
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            {tabs[0].activate == true ? <Table /> : null}

        </>
    )
}
