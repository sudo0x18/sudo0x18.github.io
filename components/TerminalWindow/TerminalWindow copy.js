"use client"
import React, { useState, useEffect, useRef } from 'react';
import Styles from './TerminalWindow.module.css'
import TerminalOutput from '../TerminalOutput/TerminalOutput';
import TerminalInput from '../TerminalInput/TerminalInput';

export default function (props) {

    const { name, prompt, height = "600px", colorMode, children, startingInputValue = "" } = props;

    const [currentLineInput, setCurrentLineInput] = useState('');
    const [cursorPos, setCursorPos] = useState(0);

    const [terminalLineData, setTerminalLineData] = useState([
        { type: <TerminalOutput />, value: "Welcome to the React Terminal UI Demo!" },
        { type: <TerminalInput />, value: "Some previous input received" }
    ]);

    const onInput = (input) => {
        setTerminalLineData([
            ...terminalLineData,
            { type: <TerminalInput />, value: input },
            { type: <TerminalOutput />, value: input }
        ]);
    };

    const scrollIntoViewRef = useRef(null)

    const updateCurrentLineInput = (event) => {
        console.log(event, 'event');
        setCurrentLineInput(event.target.value);
    }

    // Calculates the total width in pixels of the characters to the right of the cursor.
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
        if (!onInput) {
            return;
        };
        if (event.key === 'Enter') {
            onInput(currentLineInput);
            setCursorPos(0);
            setCurrentLineInput('');
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

    useEffect(() => {
        setCurrentLineInput(startingInputValue.trim());
    }, [startingInputValue]);

    // We use a hidden input to capture terminal input; make sure the hidden input is focused when clicking anywhere on the terminal
    useEffect(() => {
        if (onInput == null) {
            return;
        }
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
    }, [onInput]);

    return (
        <div>
            <div>
                <div data-terminal-prompt={prompt || '$'} key="terminal_line_prompt" className={`${Styles.terminal_line} ${Styles.terminal_input} ${Styles.terminal_active_input}`} >
                    {currentLineInput}
                    <span className={`${Styles.cursor}`} style={{ left: `${cursorPos + 1}px` }}></span>
                </div>
                <div ref={scrollIntoViewRef}></div>
            </div>
            <input id="terminal_hidden_input" className={`${Styles.terminal_hidden_input}`} placeholder="Terminal Hidden Input" value={currentLineInput} autoFocus={true} onChange={updateCurrentLineInput} onKeyDown={handleInputKeyDown} />
            {/* <div className={`${Styles.react_terminal}`} style={{ height }}>
                {typeof onInput === 'function' && <div className={`${Styles.terminal_line} ${Styles.terminal_input} ${Styles.terminal_active_input}`} data-terminal-prompt={prompt || '$'} key="terminal-line-prompt" >{currentLineInput}<span className="cursor" style={{ left: `${cursorPos + 1}px` }}></span></div>}
                <div ref={scrollIntoViewRef}></div>
            </div>
            <input className="terminal-hidden-input" placeholder="Terminal Hidden Input" value={currentLineInput} autoFocus={onInput != null} onChange={updateCurrentLineInput} onKeyDown={handleInputKeyDown} /> */}
        </div>
    );
}