"use client"
import React, { useEffect, useState } from 'react'
import TerminalHeader from '@/components/TerminalHeader/TerminalHeader';
import TerminalWindow from '@/components/TerminalWindow/TerminalWindow';
import Loader from '@/components/Loader/Loader';
import Welcome from '@/components/Loader/Welcome';
import { themes } from '@/utils/data';

export default function Terminal({ showLoading = false, showWelcome = false, showHeader = false, showHeaderButtons = false, commands = {} }) {

    const [isLoading, setLoading] = useState(true);
    const [welcome, setWelcome] = useState(false);
    const [sessionIntialized, setSessionIntialized] = useState(false);

    const [colorScheme, setColorScheme] = useState("dark");
    const [theme, setTheme] = useState(themes[colorScheme]);

    const [sessionDataFlag, setSessionData] = useState(false);

    useEffect(() => {
        const colorTheme = sessionStorage.getItem("colorScheme") ? sessionStorage.getItem("colorScheme") : "dark";
        if (colorTheme) {
            setColorScheme(colorTheme);
        }
        setSessionIntialized(typeof window != "undefined" && sessionStorage.getItem("sessionIntialized") ? sessionStorage.getItem("sessionIntialized") : false);
        setSessionData(true)
    }, []);

    useEffect(() => {
        setTheme(themes[colorScheme]);
        if (sessionDataFlag) {
            sessionStorage.setItem("colorScheme", colorScheme);
        }
    }, [sessionDataFlag, colorScheme]);


    useEffect(() => {
        if (!isLoading) {
            setWelcome(true);
            setTimeout(() => {
                setWelcome(false);
                setSessionIntialized(true);
                sessionStorage.setItem("sessionIntialized", true);
            }, 3000)
        }
    }, [isLoading]);

    if (showLoading && !sessionIntialized && isLoading) {
        return <Loader colorScheme={theme} setLoading={setLoading} sessionIntialized={sessionIntialized} isLoading={isLoading} />
    }
    if (showWelcome && !sessionIntialized && welcome) {
        return <Welcome colorScheme={theme} setLoading={setLoading} name={name} />
    }

    return (
        <div>
            <div className={`w-full text-md relative min-h-screen terminal_wrapper max-h-[4000px] overflow-y-hidden`} style={{ backgroundColor: theme?.backgroundColor, color: theme?.foreGroundColor }}>
                {
                    showHeader &&
                    <TerminalHeader
                        showButtons={showHeaderButtons}
                    />
                }
                <TerminalWindow
                    commands={commands}
                    colorScheme={theme}
                    setColorScheme={setColorScheme}
                />
            </div>
        </div>
    )
}

