import Link from 'next/link';
import React from 'react';
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { LuExternalLink } from "react-icons/lu";

export default function ProjectsText() {
    return (
        <div>
            <div className='font-bold'>
                ✨ Projects
            </div>
            <br />
            <div className='ml-4'>
                <VscDebugBreakpointLogUnverified className='inline' /> CryptoMiner: A Fileless Malware Analysis & Memory Forensics
                <br />
                Malware Analysis [Jan 2023 – Jul 2023]
                <br />
                • The project aims to analyse and understand the
                behaviour of fileless crypto miners to identify
                potential solutions to mitigate it's impact.
            </div>
            <br />
            <div className='ml-4'>
                <VscDebugBreakpointLogUnverified className='inline' /> Grabber <Link href="https://github.com/sudo0x18/AgileGrabber" className='font-medium  hover:text-blue-500' target="_blank"><LuExternalLink className='inline' /></Link> 
                <br />
                Port Scanner | Python [Nov 2022 – Nov 2022]
                <br />
                • Informer is a OSINT information gathering tool
                that gathers whois, Subdomain ,DNS,
                geolocation and shodan information of the
                target.
            </div>
            <br />
            <div className='ml-4'>
                <VscDebugBreakpointLogUnverified className='inline' /> Informer <Link href="https://github.com/sudo0x18/informer" className='font-medium  hover:text-blue-500' target="_blank"><LuExternalLink className='inline' /></Link> 
                <br />
                OSINT Tool | Python [Nov 2022 – Nov 2022]
                <br />
                • Informer is a OSINT information gathering tool
                that gathers whois, Subdomain ,DNS,
                geolocation and shodan information of the
                target
            </div>
            <br />
            <div className='ml-4'>
                <VscDebugBreakpointLogUnverified className='inline' /> Bakery Management System
                <br />
                Web Application | (Python Django) [Jun 2021 – Apr 2022]
                <br />
                • Administration, Customer Panel, Delivery
                Management, Offer Management
            </div>
        </div>
    )
}
