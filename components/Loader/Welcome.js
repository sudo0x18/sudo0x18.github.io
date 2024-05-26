import React from 'react'
import { Roboto } from "next/font/google";
import Image from 'next/image'
import { Username } from "@/utils/data"

const inter = Roboto({ subsets: ["latin"], weight: "500" });
export default function Welcome({ colorScheme, name = "" }) {
    return (
        <div className={`${inter.className} h-screen overflow-hidden text-[60px] md:text-[100px] flex justify-center items-center font-extrabold animate-fade`} style={{ backgroundColor: colorScheme.backgroundColor, color: colorScheme.foreGroundColor }}>
            {/* <h1 className='animate-pulse'>WELCOME</h1> */}
            <section class="m-40">
                <div class="px-6 py-12 text-center md:px-12 lg:text-left">
                    <div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
                        <div class="grid items-center lg:grid-cols-2">
                            <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                                <div
                                    class="block rounded-lg bg-[hsla(0,0%,100%,0.55)] py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                                    <h1 class="text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl text-center">
                                        {Username}
                                    </h1>
                                </div>
                            </div>
                            <div class="md:mb-12 lg:mb-0">
                                {/* <Image
                                    src={`/profile.jpg`}
                                    width={500}
                                    height={500}
                                    class="w-full rounded-lg shadow-lg dark:shadow-black/20"
                                    alt=""
                                /> */}
                                <img src={`/profile.jpg`} width={500} height={500} className='w-full rounded-lg shadow-lg dark:shadow-black/20' alt="" loading='lazy'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
