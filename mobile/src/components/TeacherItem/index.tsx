import { useCallback, useState } from 'react';
import { Image, Linking } from 'react-native';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import { Avatar, BioText, ButtonsContainer, ContactButton, ContactButtonText, Container, FavoriteButton, Footer, NameText, PriceText, PriceValueText, Profile, ProfileInfo, SubjectText } from './styles';
import { api } from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

export interface Teacher {
  class: {
    id: string | null | undefined;
    cost: number;
    subject: string;
    user: {
      avatar: string;
      bio: string;
      name: string;
      whatsapp: string;
    };
  };
}


interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

export function TeacherItem({teacher, favorited}: TeacherItemProps) {
  const [isFavorited, setIsFavorited] = useState(favorited);
  
  const handleCreateNewConnection = useCallback(() => {
    api.post('/connections', { user_id: teacher });

    Linking.openURL(`whatsapp://send?phone=+55${teacher.class.user.whatsapp}`);

  }, [teacher.class.id, teacher.class.user.whatsapp]);

  const handleToggleFavorite = useCallback(async () => {
    const favorites = await AsyncStorage.getItem('@Proffy:favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(
        (teacherItem: Teacher) => teacherItem.class.id === teacher.class.id,
      );

      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);

      setIsFavorited(true);
    }

    await AsyncStorage.setItem(
      '@Proffy:favorites',
      JSON.stringify(favoritesArray),
    );
  }, [isFavorited, teacher]);

  return (
    <Container>
      <Profile>
        <Avatar source={{uri: teacher.class.user.avatar}} />

        <ProfileInfo>
          <NameText>{teacher.class.user.name}</NameText>
          <SubjectText>{teacher.class.subject}</SubjectText>
        </ProfileInfo>
      </Profile>

      <BioText>{teacher.class.user.bio}</BioText>

      <Footer>
        <PriceText>
          Preço/hora {'   '}
          <PriceValueText>$ {teacher.class.cost}</PriceValueText>
        </PriceText>

        <ButtonsContainer >
          <FavoriteButton onPress={handleToggleFavorite} isFavorited={isFavorited}>
        <Image source={isFavorited ? unfavoriteIcon : heartOutlineIcon} />
      </FavoriteButton>
          <ContactButton>
            <Image source={whatsappIcon} />
            <ContactButtonText onPress={handleCreateNewConnection}>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

