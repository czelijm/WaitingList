import { css } from "@emotion/css";
import { Colors } from "../../constants/colors";

export const SelectStyles = css`
    background-color:${Colors.WHITE}; 
    display:flex
    width: 220px !important;
    min-width: 220px !important;
    text-align: left;
` 
export const SelectContainerStyles = css`
    text-align:end;
    background-color:${Colors.LIST_BACKGROUND}; 
    border-radius: 5px 5px 0px 0px; 
` 
export const RootStyles = css`    -webkit-box-shadow: 0px -1px 10px -1px ${Colors.GREY};
-moz-box-shadow: 0px -1px 10px -1px ${Colors.GREY};
box-shadow: 0px -1px 10px -1px ${Colors.GREY};`