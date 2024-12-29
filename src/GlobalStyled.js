import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const designFont = {
  headerFont: "RiaSans-ExtraBold",
};

export const GlobalStyled = createGlobalStyle`

${reset}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

img{
    width:100%;
    display:block;
}

a{
    text-decoration:none;
    display:block;
}

`;
