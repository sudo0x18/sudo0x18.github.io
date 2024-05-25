import React from "react";
import '../../app/globals.css';
import { PromptIcon, PromptName } from "@/utils/data";

const TerminalInput = ({ children }) => {
    return (
        <div className="flex">
            <span><span className="greenText">✓</span> {PromptName}</span>
            <div
                className={`whitespace-pre-wrap prompt-icon`}
                data-prompt={`${PromptIcon}`}
            >
                {children}
            </div>
        </div>
    );
};

export default TerminalInput;