"use client";
import { ChevronDown } from "lucide-react";
import React from "react";
import { backgrounds } from "../utils/utilities";
import OutsideClickHandler from "react-outside-click-handler";

interface BackgroundSelectorProps{
    background: string;
    setBackground: (background: string) => void;
}

function BackgroundSelector({ background, setBackground } : BackgroundSelectorProps){

    const [showDropdown, setShowDropdown] = React.useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleBackgroundChange = (newBackground: string) => {
        setBackground(newBackground);
    }

    return (
        <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
        <div className="background-selector relative" onClick={toggleDropdown}>
            <p className="py-[5px] text-sm font-medium">Background</p>
            <div className="dropdown-title w-[62px]">
                <div className="rounded-full w-[20px] h-[20px]" style={{background: background}}></div> <ChevronDown />
            </div>
            {showDropdown && <div className="dropdown-menu top-[70px] w-[62px] rounded-full flex flex-col gap-2">{backgrounds.map((background, i) => {
                return <button key={i} onClick={() => handleBackgroundChange(background)} className="w-[20px] h-[20px] rounded-full" style={{background: background}}></button>
            })}</div>}
        </div>
        </OutsideClickHandler>
    )
}

export default BackgroundSelector;