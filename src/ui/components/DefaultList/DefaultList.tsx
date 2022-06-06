import {
    StyledList,
    StyledButton,
    StyledListItem,
    StyledImg,
    StyledInfo,
    StyledName,
    StyledDescription,
} from './DefaultList.styles'

//import {Pet} from '../../'

// interface DefaultListProps{
//     pets: Pet[];
// }

export default function DefaultList() {
    return (
        <StyledList>
                <StyledListItem>
                    <StyledImg src="https://st2.depositphotos.com/2166845/5890/i/450/depositphotos_58906929-stock-photo-cairn-terrier-puppy.jpg"/>
                    <StyledInfo>
                        <StyledName>Bidu</StyledName>
                        <StyledDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce orci lacus, scelerisque id tincidunt in, hendrerit in tortor.
                            Morbi in odio vel urna varius feugiat.
                            Integer orci tortor, placerat lobortis scelerisque a, accumsan sit amet ligula. Nunc lacinia posuere porttitor.
                            Praesent fringilla libero vitae nulla dignissim vehicula. 
                        </StyledDescription>
                        <StyledButton variant="contained">Adotar</StyledButton>
                    </StyledInfo>
                </StyledListItem>
                {/* <StyledListItem>
                    <StyledImg src="https://st3.depositphotos.com/11328482/34011/i/450/depositphotos_340118510-stock-photo-woman-holds-a-dog-on.jpg"/>
                    <StyledInfo>
                        <StyledName>Aggy</StyledName>
                        <StyledDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce orci lacus, scelerisque id tincidunt in, hendrerit in tortor.
                            Morbi in odio vel urna varius feugiat.
                            Integer orci tortor, placerat lobortis scelerisque a, accumsan sit amet ligula. Nunc lacinia posuere porttitor.
                            Praesent fringilla libero vitae nulla dignissim vehicula. 
                        </StyledDescription>
                        <StyledButton variant="contained">Adotar</StyledButton>
                    </StyledInfo>
                </StyledListItem>
                <StyledListItem>
                    <StyledImg src=" https://st2.depositphotos.com/2222024/5609/i/450/depositphotos_56093859-stock-photo-happy-little-orange-havanese-puppy.jpg"/>
                    <StyledInfo>
                        <StyledName>Baloo</StyledName>
                        <StyledDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce orci lacus, scelerisque id tincidunt in, hendrerit in tortor.
                            Morbi in odio vel urna varius feugiat.
                            Integer orci tortor, placerat lobortis scelerisque a, accumsan sit amet ligula. Nunc lacinia posuere porttitor.
                            Praesent fringilla libero vitae nulla dignissim vehicula. 
                        </StyledDescription>
                        <StyledButton variant="contained">Adotar</StyledButton>
                    </StyledInfo>
                </StyledListItem> */}
        </StyledList>
    )
}