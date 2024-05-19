"use client";
import React, { useState, useRef } from "react";
import CodeEditor from "@/Components/CodeEditor";
import { languages, themes, backgrounds } from "@/utils/utilities";
import LanguageSelector from "@/Components/LanguageSelector";
import ThemeSelector from "@/Components/ThemeSelector";
import BackgroundSelector from "@/Components/BackgroundSelector";
import PaddingSelector from "@/Components/PaddingSelector";
import {Download} from "lucide-react";
import html2canvas from "html2canvas";

export default function Home() {

  const editorRef = useRef(null);

  const [language, setLanguage] = useState(languages[0].name);
  const [theme, setTheme] = useState(themes[0]);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [background, setBackground] = useState(backgrounds[0]);
  const [paddings, setPaddings] = useState(["1rem","2rem","3rem","4rem"]);
  const [currentPadding, setCurrentPadding] = useState(paddings[2]);

  const exportPng = async () => {
    const editorElem = editorRef.current;

    if(editorElem){

      const handleElems = document.querySelectorAll(".handle") as any;
      const cursorElem = document.querySelector(".ace_cursor") as any;

      handleElems.forEach((elem: any) => {
        elem.style.display = "none";
      });
      cursorElem.style.display = "none";

      const canvas = await html2canvas(editorElem);
      const image = canvas.toDataURL("image/png", 1.0);
      
      const link = document.createElement("a");
      link.download = "code.png";
      link.href = image;
      link.click();

      handleElems.forEach((elem: any) => {
        elem.style.display = "block";
      });
      cursorElem.style.display = "block";
    }
  }

  return (
    <main className="h-[100vh] flex flex-col items-center justify-between">
      <header className="mt-6 flex gap-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md">
        <LanguageSelector language={language} setLanguage={setLanguage} setActiveIcon={setActiveIcon} />
        <ThemeSelector theme={theme} setTheme={setTheme} />
        <BackgroundSelector background={background} setBackground={setBackground} />
        <PaddingSelector paddings={paddings} currentPadding={currentPadding} setCurrentPadding={setCurrentPadding}/>
        <div className="export-btn self-center ml-auto">
          <button className="flex items-center gap-2 py-2 px-3 rounded-md text-sm bg-blue-400 text-blue-400 font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-100" onClick={exportPng}>
          <Download /> Export PNG 
          </button>
        </div>
      </header>
      <div className="code-editor-ref mt-[14rem]" ref={editorRef}>
        <CodeEditor language={language} background={background} theme={theme} currentPadding={currentPadding} icon={activeIcon} />
      </div>
    </main>
  );
}
