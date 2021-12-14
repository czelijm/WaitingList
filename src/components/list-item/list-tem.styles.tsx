import { css } from "@emotion/css";
import { Colors } from "../../constants/colors";
import { priorityColorArray } from "../../models/priority";

export const NameStyles = css`
    font-size: 24px;
    border-radius: 0px;
    height: 100%; overflow: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const ClockStyles = css`
    padding: 32px;
    font-size: 24px;
    font-family: 'Orbitron', sans-serif;
    color:${Colors.BLACK};
    border-color:black;



`

export const ClockDescriptionStyles = css`
    font-size: 10px;
`

export const ClockDigitsStyles = css`
    background-color:${Colors.WHITE}; height: 100%; overflow: auto; width:auto;
`
export const ClockDigitsDiv = css` 
    margin-bottom:20px; display: flex; align-items: flex-start; width:100%;
    border-color: ${Colors.BLACK};
    border-style: solid;
    border-width: 3px;
    border-radius: 5px;
`

export const StatusMessageStyles = css`
    font-size: 14px;
    
`
export const SetPriority = (priority:number):string => css`
    background-color: ${priorityColorArray[priority]};
`