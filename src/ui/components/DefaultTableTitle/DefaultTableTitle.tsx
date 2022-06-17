import { StyledTitle } from './DefaultTableTitle.style';

interface DefaultTableTitleProps {
    children: any;
}

export default function DefaultTableTitle(props: DefaultTableTitleProps) {
    return (
        <>
            <StyledTitle>{props.children}</StyledTitle>
        </>
    )
};