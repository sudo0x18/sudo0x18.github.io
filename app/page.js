import Terminal from '@/components/Terminal/Terminal'
import { commands } from '@/utils/data';
import React from 'react';

export default function Page() {

  return (
    <Terminal
      showLoading={true} // pass true to Show Loading animation
      showWelcome={true} // pass true to Show Welcome animation
      showHeader={true} // pass true to Show Header
      showHeaderButtons={true} // pass true to Show Header buttons on right
      commands={commands}
    // redBtnCallback={() => {}} // pass callback func for red button
    // yellowBtnCallback={() => {}} // pass callback func for yellow button
    // greenBtnCallback={() => {}} // pass callback func for green button
    />
  )
}
