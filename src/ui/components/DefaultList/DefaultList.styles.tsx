import { styled,Button } from "@mui/material";
export const StyledContainer = styled('div')`

`;

export const StyledList = styled('ul')`
    display:flex;
    flex-direction:column; 
    width:100%;
    margin: 0 auto;
    padding-bottom: ${({theme}) => theme.spacing(3)};
`;

export const StyledListItem = styled('li')`
    list-style-type: none;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    gap: ${({theme}) => theme.spacing(5)};
    margin-bottom: ${({theme}) => theme.spacing(5)};

    ${({theme}) => theme.breakpoints.down('md')} {
        grid-template-columns: 1f;
        gap: ${({theme}) => theme.spacing(2)};
        margin-bottom: ${({theme}) => theme.spacing(10)};
    }

`;

export const StyledImg = styled('img')`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2) };
    align-self:center;
    margin-left:1%;
    min-width:422px;
    width:84%;
`;

export const StyledInfo = styled('div')`
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

export const StyledName = styled('h1')`
    margin:0px;
    @media only screen and (min-width : 4001px)  and (max-width : 6000px)
    { font-size: 7.3rem;}
    @media only screen and (min-width : 3501px)  and (max-width : 4000px)
    { font-size: 5.3rem;}
    @media only screen and (min-width : 2501px) and (max-width : 3500px)
    { font-size: 3.5rem;}

    @media only screen and (min-width : 1901px) and (max-width : 2500px)
    { font-size: 2.7rem; }

    @media only screen and (min-width : 1766px) and (max-width : 1900px)
    { font-size: 2.5rem; }

    @media only screen and (min-width : 1550px) and (max-width : 1766px)
    { font-size: 2.4rem; }
`;

export const StyledDescription = styled('p')`
    margin: 0 0 20px 0;
    min-width:400px;
    font-size:1.1rem;
    padding-right: 9%;
    text-align: justify;
    word-break: break-word;

    @media only screen and (min-width : 3976px) 
    { 
        font-size: 4.3rem;
        margin: 0 0 35px 0;
    }
    @media only screen and (min-width : 3501px) and (max-width : 3975px)
    { 
        font-size: 3.3rem;
        margin: 0 0 34px 0;
    }

    @media only screen and (min-width : 2501px) and (max-width : 3500px)
    { 
        font-size: 2.2rem;
        margin: 0 0 32px 0;
    }

    @media only screen and (min-width : 1901px) and (max-width : 2500px)
    { 
        font-size: 1.7rem;
        margin: 0 0 29px 0; 
    }

    @media only screen and (min-width : 1766px) and (max-width : 1900px)
    { 
        font-size: 1.5rem;
        margin: 0 0 26px 0; 
    }

    @media only screen and (min-width : 1650px) and (max-width : 1766px)
    { 
        font-size: 1.4rem;
        margin: 0 0 25px 0; 
    }
`;

export const StyledButton = styled(Button)`
    font-size: 1rem;
    margin-right:9%;
    @media only screen and (min-width : 3976px)
    { font-size: 4rem;}
    @media only screen and (min-width : 3501px) and (max-width : 3975px)
    { font-size: 3rem;}

    @media only screen and (min-width : 2501px) and (max-width : 3500px)
    { font-size: 1.8rem;}

    @media only screen and (min-width : 1550px) and (max-width : 2500px)
    { font-size: 1.2rem; }
`;