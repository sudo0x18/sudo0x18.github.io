"use client"
import { Username } from '@/utils/data';
import React from 'react';

export default function TerminalHeader(props) {
    const {
        showButtons = true,
        redBtnCallback = () => { },
        yellowBtnCallback = () => { },
        greenBtnCallback = () => { },
    } = props;

    return (
        <div className='flex justify-between items-center p-4'>
            <h1 className='text-2xl'>
                {Username}
            </h1>
            {
                showButtons &&
                <div className="flex flex-row gap-3">
                    <button className="cursor-pointer w-4 h-4 bg-red-600 rounded-full" onClick={redBtnCallback} />
                    <button className="cursor-pointer w-4 h-4 bg-yellow-600 rounded-full" onClick={yellowBtnCallback} />
                    <button className="cursor-pointer w-4 h-4 bg-green-600 rounded-full" onClick={greenBtnCallback} />
                </div>
            }
        </div>
    )
}