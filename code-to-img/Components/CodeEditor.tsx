"use client"
import React from "react";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/mode-css"
import "ace-builds/src-noconflict/mode-java"
import "ace-builds/src-noconflict/mode-csharp"

import "ace-builds/src-noconflict/theme-ambiance"
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/theme-github"
import "ace-builds/src-noconflict/theme-terminal"
import "ace-builds/src-noconflict/theme-twilight"
import { useEffect } from "react";
import { initialCode } from "@/utils/utilities";

interface CodeEditorProps {
  language: string;
  theme: string;
  icon: string;
  background?: string;
  currentPadding?: string;
}

function CodeEditor({language, theme, icon, background, currentPadding} : CodeEditorProps) {
  const [width, setWidth] = React.useState(1000);
  const [height, setHeight] = React.useState(500);
  const [title, setTitle] = React.useState("Untitled-1");
  const [code, setCode] = React.useState(initialCode);

  const handleCodeChange = (newCode: string) => {
      setCode(newCode);
  }

  //@ts-ignore
  const handleResize = (evt, direction, ref, pos) => {
    const newHeight = ref.style.height;
    setHeight(parseInt(newHeight, 10));
  };

  const updateSize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize()
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Resizable minHeight={466} minWidth={510} maxWidth={1000} defaultSize={{width: width, height: height}} onResize={handleResize} className="resize-container relative" style={{background: background}} >
       <div className="code-block" style={{padding: currentPadding}}>
        <div className="handle handle-top absolute left-1/2 top-[-4px] translate-x-[-50%] w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-50"></div>
        <div className="handle handle-bottom absolute left-1/2 bottom-[-4px] w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-50"></div>
        <div className="handle handle-left absolute top-1/2 left-[-4px] w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-50"></div>
        <div className="handle handle-right absolute top-1/2 right-[-4px] w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-50"></div>
        <div className="code-title h-[60px] px-4 flex items-center justify-between bg-black bg-opacity-80" style={{lineHeight: 2}}>
          <div className="dots flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#ff5656]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbc6a]"></div>
            <div className="w-3 h-3 rounded-full bg-[#67f772]"></div>
          </div>

          <div className="input-control w-full">
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full text-[hsla(0,0%,100%,.6)] outline-none font-medium text-center bg-transparent" />
          </div>

          <div className="icon flex justify-center items-center p-1 bg-black bg-opacity-30 rounded-sm">
            <img src={icon} className="w-[33px]" alt="" />
          </div>
        </div>
        <AceEditor 
            name="editor"
            value={code}
            fontSize={16}
            theme={theme}
            mode={language}
            showGutter={false}
            wrapEnabled={true} 
            height={`calc(${height}px - ${currentPadding} - ${currentPadding} - 52px)`}
            showPrintMargin={false} 
            highlightActiveLine={false}
            editorProps={{ $blockScrolling: true }}
            className="Editor-Container"
            onChange={handleCodeChange} 
        />
       </div>
    </Resizable>
  );
}

export default CodeEditor;