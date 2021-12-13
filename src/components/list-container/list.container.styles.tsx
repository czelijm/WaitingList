import { css } from "@emotion/css";
import { Colors } from "../../constants/colors";

export const ListContainerStyles = css`

    background-color:${Colors.GREY};
    border-color: ${Colors.BLACK};
    border-style: solid;
    border-width: 3px;
    border-radius:3px;
    padding: 1%;

    display: -webkit-box;  
    display: -webkit-flex;
    display: -ms-flexbox;
    
    display: flex;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch;
  
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
`

