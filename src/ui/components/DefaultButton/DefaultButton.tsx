import {
    StyledButton,
} from './DefaultButton.styles';

interface DefaultButtonProps {
    onClick: (e:any) => void;
    children: any;
    variant?: string;
}

export default function DefaultButton(props:DefaultButtonProps) {
    return (
        <>
            <StyledButton onClick={props.onClick} variant="contained">{props.children}</StyledButton>
        </>
    )
}