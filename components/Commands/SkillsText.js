import { Skills } from '@/utils/data'
import React from 'react'
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";


export default function SkillsText() {
    return (
        <div>
            <div className='font-bold'>
                I can assist you with,
            </div>
            {
                Skills && Skills.length > 0 && Skills.map((skill, index) => {
                    return (
                        <div className='ml-4' key={index}>
                            <span><VscDebugBreakpointLogUnverified className="inline" /> {skill}</span>
                        </div>
                    )
                })
            }
            <br/>
            <div>
                ⇒ Available for freelance, remote or contact based oppertunities.
            </div>
        </div >
    )
}
