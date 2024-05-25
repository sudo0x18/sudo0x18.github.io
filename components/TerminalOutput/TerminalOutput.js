import React from "react";

const TerminalOutput = ({children}) => {
  return (
    <div className="whitespace-pre-wrap">{ children }</div>
  );
} 

export default TerminalOutput;