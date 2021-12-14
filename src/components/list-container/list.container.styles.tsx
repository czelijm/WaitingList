import { css } from "@emotion/css";
import { Colors } from "../../constants/colors";

export const ListContainerStyles = css`

    background-color:${Colors.LIST_BACKGROUND};

    padding: 1%;

    border-radius: 0px 0px 5px 5px;

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

