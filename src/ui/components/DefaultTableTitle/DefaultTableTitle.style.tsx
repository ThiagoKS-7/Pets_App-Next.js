import { styled } from "@mui/material";

export const StyledTitle = styled('h3')`
    margin:0px;
    font-size: 0.8rem;
    @media only screen and (min-width : 4501px) and (max-width : 9500px)
    { font-size: 3rem; }
    @media only screen and (min-width : 1901px) and (max-width : 4500px)
    { font-size: 2.5rem; }

    @media only screen and (min-width : 1766px) and (max-width : 1900px)
    { font-size: 1.6rem; }

    @media only screen and (min-width : 550px) and (max-width : 1766px)
    { font-size: 1.4rem; }
`;