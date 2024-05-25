import { socialMedia } from '@/utils/data'
import Link from 'next/link'
import React from 'react'

export default function ContactText() {
    return (
        <div>
            <div className='font-bold'>
                🤝 Let's connect with me
            </div>
            <br/>
            {
                Object.keys(socialMedia).map((social, index) => {
                    return (
                        <div className='grid lg:grid-cols-6 grid-cols-4 grid-flow-col' key={index}>
                            <div className='flex items-center gap-3'>{socialMedia[social]?.icon && socialMedia[social]?.icon} {social}</div>
                            <div className='lg:col-span-5 col-span-3'>
                                - <Link className='font-medium text-blue-600 dark:text-blue-500 hover:underline' href={socialMedia[social]?.link} target="_blank">{socialMedia[social]?.text}</Link><br />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
