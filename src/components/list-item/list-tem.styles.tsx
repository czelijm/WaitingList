import { css } from "@emotion/css";
import { Colors } from "../../constants/colors";
import { priorityColorArray } from "../../models/priority";

export const NameStyles = css`
    padding: 32px;
    font-size: 24px;
    border-radius: 0px;
`

export const ClockStyles = css`
    padding: 32px;
    font-size: 24px;
    font-family: 'Orbitron', sans-serif;
    color:white;
    border-radius: 2px;
    border-color:black;
`

export const ClockDescriptionStyles = css`
    font-size: 10px;
`

export const ClockDigitsStyles = css`

`
export const StatusMessageStyles = css`
    font-size: 14px;
    
`
export const SetPriority = (priority:number):string => css`
background-color: ${priorityColorArray[priority]};
`