import React from "react";
import { children } from "react";
import "./Button.css"

export default function Button({children}, onClick){
    return(
        <button onClick={onClick} className="button">{children}</button>
    );
};