import React, { useEffect } from 'react';
import Style from './Loader2.module.css';
import { PromptIcon, PromptName, dummyText } from '@/utils/data';
import { Inconsolata } from "next/font/google";

const inter = Inconsolata({ subsets: ["latin"], weight: "400" });


var textarea = null;
var text = "sh cezmi.sh && apt-get update"
var i = 0;
export default function Loader({ colorScheme, setLoading }) {

    useEffect(() => {
        textarea = document.getElementById('term');
        runner().then(() => {
            setLoading(false)
        });
    }, [])

    async function runner() {
        return new Promise(resolve => {
            textarea.append(text.charAt(i));
            i++;
            setTimeout(
                function () {
                    if (i < text.length)
                        runner();
                    else {
                        textarea.append("\n")
                        i = 0;
                        setTimeout(async function () { await feedbacker(); }, 500);
                    }
                }, Math.floor(Math.random() * 220));
        });
    }

    var count = 0;
    var time = 1;
    function feedbacker() {
        return new Promise(resolve => {
            textarea.append("[    " + count / 1000 + "] " + dummyText[i] + "\n");
            if (time % 2 == 0) {
                i++;
                textarea.append("[    " + count / 1000 + "] " + dummyText[i] + "\n");
            }
            if (time == 3) {
                i++;
                textarea.append("[    " + count / 1000 + "] " + dummyText[i] + "\n");
                i++;
                textarea.append("[    " + count / 1000 + "] " + dummyText[i] + "\n");
                i++;
                textarea.append("[    " + count / 1000 + "] " + dummyText[i] + "\n");
            }
            window.scrollTo(0, document.body.scrollHeight);
            i++;
            time = Math.floor(Math.random() * 4) + 1;
            count += time;
            setTimeout(
                async function () {
                    if (i < dummyText.length - 1)
                        await feedbacker();
                    else {
                        // textarea.append("\nInitialising...\n");
                        setTimeout(() => {
                            setLoading(false)
                        }, 2000)
                    }
                }, time);
        })
    }

    return (
        <div className={`min-h-screen greenText`} style={{ backgroundColor: colorScheme?.backgroundColor/* , color: colorScheme?.foreGroundColor */ }}>
            <div id="load" className={`${Style.load} ${inter.className}`}>
                <pre id="term" className={`${Style.term} ${inter.className} text-md m-0 p-0 whitespace-pre-wrap`}>{PromptName}{PromptIcon} {"fetching previous session...\n"}</pre>
            </div>
        </div>
    )
}
