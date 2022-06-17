import {styled} from "@mui/material"

export const HeaderContainer = styled('header')`
    height: 115px;
    background-color: #f6f6f6;
    padding: ${({theme}) => theme.spacing(2)};
    div{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        align-items:center;
        gap: ${({theme}) => theme.spacing(2)}
    }

    a{
        font-size: 20px;
    }
`;

export const Logo = styled('img')`
width: fit-content;
`;

export const LinksContainer = styled('nav')`
    display: flex;
    margin-right: ${({theme}) => theme.spacing(3)};
    flex-direction: column;
    gap: ${({theme}) => theme.spacing(2)};
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-end;
`;