import { styled,Button } from "@mui/material";
export const StyledButton = styled(Button)`
font-size: 1rem;
margin-right:9%;
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