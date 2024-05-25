import TerminalOutput from '@/components/TerminalOutput/TerminalOutput'
import React from 'react'

export default function Welcome() {
    return (
        <>
            <div>
                Welcome to ShellFolio v2002
            </div>
            <div>
                Copyright (C) 2024. All rights reserved
            </div>
            <div>
                Type "help" to see available commands.
            </div>
            <div>
                All Commands are case sensitive.
            </div>
        </>
    )
}
