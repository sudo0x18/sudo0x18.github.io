"use client"
import React, { useEffect, useRef, useState } from 'react';
import TerminalOutput from '../TerminalOutput/TerminalOutput';
import TerminalInput from '../TerminalInput/TerminalInput';
import WelcomeText from '@/components/Commands/WelcomeText';
import { themes } from '@/utils/data';

export default function (props) {

    const { colorScheme, setColorScheme, commands = {} } = props;

    // refs
    const scrollIntoViewRef = useRef(null);

    // states
    const [history, setHistory] = useState(typeof window != "undefined" && sessionStorage.getItem('history') ? JSON.parse(sessionStorage.getItem('history')) : []);
    const [currentLineInput, setCurrentLineInput] = useState('');
    const [cursorPos, setCursorPos] = useState(0);

    useEffect(() => {
        if (history.length > 0) {
            sessionStorage.setItem("history", JSON.stringify(history))
        }
    }, [history])

    let defaultData = [<WelcomeText />];

    const [terminalLineData, setTerminalLineData] = useState(defaultData);

    const updateCurrentLineInput = (event) => {
        setCurrentLineInput(event.target.value);
    }

    // Create a temporary span element to measure the width of the characters.
    const calculateInputWidth = (inputElement, chars) => {
        const span = document.createElement('span');
        span.style.visibility = 'hidden';
        span.style.position = 'absolute';
        span.style.fontSize = window.getComputedStyle(inputElement).fontSize;
        span.style.fontFamily = window.getComputedStyle(inputElement).fontFamily;
        span.innerText = chars;
        document.body.appendChild(span);
        const width = span.getBoundingClientRect().width;
        document.body.removeChild(span);
        // Return the negative width, since the cursor position is to the left of the input suffix
        return -width;
    };

    const clamp = (value, min, max) => {
        if (value > max) return max;
        if (value < min) return min;
        return value;
    }

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            let data = [<TerminalInput>{currentLineInput}</TerminalInput>, proccessInput(currentLineInput.toLowerCase())]
            if (currentLineInput.toLowerCase() === "clear") {
                setTerminalLineData([])
            } else {
                setTerminalLineData((prev) => [...prev, ...data]);
            }
            setCursorPos(0);
            setCurrentLineInput('');
            setHistory([...history, currentLineInput])
            setTimeout(() => scrollIntoViewRef?.current?.scrollIntoView({ behavior: "auto", block: "nearest" }), 500);
        } else if (["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp", "Delete"].includes(event.key)) {
            const inputElement = event.currentTarget;
            let charsToRightOfCursor = "";
            let cursorIndex = currentLineInput.length - (inputElement.selectionStart || 0);
            cursorIndex = clamp(cursorIndex, 0, currentLineInput.length);

            if (event.key === 'ArrowLeft') {
                if (cursorIndex > currentLineInput.length - 1) cursorIndex--;
                charsToRightOfCursor = currentLineInput.slice(currentLineInput.length - 1 - cursorIndex);
            }
            else if (event.key === 'ArrowRight' || event.key === 'Delete') {
                charsToRightOfCursor = currentLineInput.slice(currentLineInput.length - cursorIndex + 1);
            }
            else if (event.key === 'ArrowUp') {
                charsToRightOfCursor = currentLineInput.slice(0)
            }

            const inputWidth = calculateInputWidth(inputElement, charsToRightOfCursor);
            setCursorPos(inputWidth);
        }
    }

    // We use a hidden input to capture terminal input; make sure the hidden input is focused when clicking anywhere on the terminal
    useEffect(() => {
        // keep reference to listeners so we can perform cleanup
        const elListeners = [];
        for (const terminalEl of document.getElementsByClassName('terminal_wrapper')) {
            const listener = () => (terminalEl?.querySelector('#terminal_hidden_input'))?.focus();
            terminalEl?.addEventListener('click', listener);
            elListeners.push({ terminalEl, listener });
        }
        return function cleanup() {
            elListeners.forEach(elListener => {
                elListener.terminalEl.removeEventListener('click', elListener.listener);
            });
        }
    }, []);

    const proccessInput = (input) => {

        if(input == "") return "";
        if(input == "exit") {
            return <div>😂😅 Hehe...., Sorry but we can't close this terminal on our own, You have to manually close it.</div>
        }

        if(Object.keys(commands).includes(input)) {
            return <div><br/>{commands[input].content}<br/></div>;
        } else {

            // const arrInput = input.split(" ").filter((item) => item.trim() != "").map((item) => item.trim());
            // if(arrInput.length === 3 && arrInput[0] == "themes" && arrInput[1] == "set" && Object.keys(themes).includes(arrInput[2])) {
            //     setColorScheme(arrInput[2]);
            //     return;
            // }
            return <TerminalOutput>{`bash: ${input}: command not found`}</TerminalOutput>
        }

        if (input.trim() === "") return;

        let objCommands = typeof commands === 'object' && commands !== null && Object.keys(commands).length > 0 ? commands : {};

        let allCommands = [
            // `\t⪢ help\n`,
            // `\t⪢ setcolor : example [setcolor -fg #000000 -bg #ffffff]\n`
        ];

        // some default commands 
        objCommands.history = ["Commands\n----------\n", ...history, "\n"]; // to get history

        Object.keys(objCommands).map((command) => {
            allCommands.push(`\t* ${command}\n`);
        })
        // allCommands.sort();
        allCommands = [...new Set(allCommands)]

        objCommands.help = [" => Available commands listed below. Type \"clear\" to clear & \"exit\" to close terminal.\n\n", ...allCommands, "\n"]
        objCommands.exit = ["😂😅 Hehe...., Sorry but we can't close this terminal on our own, You have to manually close it."]

        // for setting color theme
        const arrInput = input.split(" ").filter((item) => item.trim() != "").map((item) => item.trim());
        if (arrInput[0] === "setcolor") {
            if (input.match(/setcolor -fg #[A-Za-z0-9]+ -bg #[A-Za-z0-9]+/i)) {
                setColorScheme({
                    foreGroundColor: arrInput[2],
                    backgroundColor: arrInput[4]
                })
            } else {
                output = [`bash: ${input}: command not found`]
            }
        }
        // for reseting color to default
        else if (input === "resetcolor") {
            setColorScheme({
                foreGroundColor: "#ffffff",
                backgroundColor: "#000000"
            });
        } else if (objCommands?.[input] && Array.isArray(objCommands?.[input])) {
            return objCommands?.[input];
        } else {
            return [`bash: ${input}: command not found. The term '${input}' is not recognized as the name of a cmdlet.`];
        }
    }

    return (
        <div>
            <div className='flex flex-col overflow-auto px-4 py-12'>
                {
                    terminalLineData && terminalLineData.length > 0 &&
                    terminalLineData.map((item, key) => {
                        return <div key={key}>{item}</div>
                    })
                }
                <TerminalInput>
                    {currentLineInput}
                    <span className='relative inline-block w-[2px] h-[16px] top-[3px] text-md animate-pulse' style={{ left: `${cursorPos + 1}px`, backgroundColor: colorScheme?.foreGroundColor }}>
                    </span>
                    <div ref={scrollIntoViewRef}></div>
                </TerminalInput>
            </div>
            <input id="terminal_hidden_input" className="fixed left-[-1000px]" placeholder="" value={currentLineInput} autoFocus={true} onChange={updateCurrentLineInput} onKeyDown={handleInputKeyDown} />
        </div>
    );
}