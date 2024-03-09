import { Image } from 'react-native';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import { Avatar, BioText, ButtonsContainer, ContactButton, ContactButtonText, Container, FavoriteButton, Footer, NameText, PriceText, PriceValueText, Profile, ProfileInfo, SubjectText } from './styles';
import { useState } from 'react';



export function TeacherItem() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: "https://github.com/jones-bass.png" }} />

        <ProfileInfo>
          <NameText>Jones Souza</NameText>
          <SubjectText>Matemática</SubjectText>
        </ProfileInfo>
      </Profile>

      <BioText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum nulla mollitia porro at quos laudantium illum cupiditate reprehenderit id, aspernatur qui ullam nobis earum expedita vero repudiandae aliquid impedit hic.</BioText>

      <Footer>
        <PriceText>
          Preço/hora {'   '}
          <PriceValueText>$ 190,00</PriceValueText>
        </PriceText>

        <ButtonsContainer >
          <FavoriteButton onPress={handleToggleFavorite} isFavorited={isFavorited}>
        <Image source={isFavorited ? unfavoriteIcon : heartOutlineIcon} />
      </FavoriteButton>
          <ContactButton>
            <Image source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>

        

        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

