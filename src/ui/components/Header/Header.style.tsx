import {styled} from "@mui/material"


export const DefaultHeader  = styled('header')`
    display:flex;
    justify-content:center;
    border-bottom: 1px solid #f0f0f0;
    padding: ${({theme})=>theme.spacing(6)}; // 6 * 8 = 48px
`;

export const Logo = styled('img')`
   width:40%
     /* @media only screen and (min-width : 5201px)
    { width: 2.7rem;}

    @media only screen and (min-width : 3550px) and (max-width : 5200px)
    { width: 2.3rem; }

    @media only screen and (min-width : 2650px) and (max-width : 3549px)
    { width: 1.4rem; } */
`;