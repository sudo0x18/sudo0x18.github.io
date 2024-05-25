import { commands } from '@/utils/data';
import React from 'react';


export default function HelpText() {
    return (
        <div>
            <div className='font-bold'>- Available commands listed below. Type "clear" to clear the console & "exit" to close terminal.</div>
            <br/>
            {
                Object.keys(commands).map((command, index) => {
                    /* return <div className='flex' key={index}>
                        <div className=''><span className="greenText">{command}</span> <span className=" inline-block ml-4"> - {commands[command].description}</span></div>
                    </div> */

                    return (
                        <div className='grid lg:grid-cols-6 grid-cols-4 grid-flow-col' key={index}>
                            <div className='greenText'>{command}</div>
                            <div className='lg:col-span-5 col-span-3'> - {commands[command].description}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
