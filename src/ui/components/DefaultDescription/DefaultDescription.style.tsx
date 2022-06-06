import { styled } from "@mui/system";

export const Container = styled('div')`
    display: flex;
    flex-direction: column;
    align-items:center
`;


export const StyledTitle = styled('h2') `
    margin:  5px 0 5px 0;
`;

export const StyledSubTitle = styled('span') `
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: ${({theme}) => theme.spacing(5)};  //5*8 = 40px
    font-weight: normal;
    color: ${({theme}) => theme.palette.text.secondary};
    
    @media only screen and (min-width : 3976px) and (max-width : 6000px)
    { 
        font-size: 4.3rem;
        margin-bottom: ${({theme}) => theme.spacing(10)};
     }
    @media only screen and (min-width : 3001px) and (max-width : 3975px)
    { 
        font-size: 3.2rem;
        margin-bottom: ${({theme}) => theme.spacing(9)};
     }

    @media only screen and (min-width : 2550px) and (max-width : 3000px)
    { 
        font-size: 2.3rem;
        margin-bottom: ${({theme}) => theme.spacing(8)};
    }
    @media only screen and (min-width : 1976px) and (max-width : 2549px)
    { 
        font-size: 1.8rem;
        margin-bottom: ${({theme}) => theme.spacing(7)};
    }

    @media only screen and (min-width : 1550px) and (max-width : 1975px)
    { 
        font-size: 1.6rem;
        margin-bottom: ${({theme}) => theme.spacing(6)};
    }

    @media only screen and (min-width : 1400px) and (max-width : 1549px)
    { 
        font-size: 1.2rem;
        margin-bottom: ${({theme}) => theme.spacing(5)};
    }
`;