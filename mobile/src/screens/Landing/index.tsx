import { CommonActions, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import { Image } from 'react-native';

import landingImg from '../../assets/images/landing.png';
import heartIcon from '../../assets/images/icons/heart.png';

import { Feather } from '@expo/vector-icons';

import { ButtonPrimary, ButtonSecundary, ButtonText, ButtonsContainer, ContainerLanding, Logo, Title, TitleBold, TotalConnections } from './styles';
import { api } from '../../services/api';

interface TotalConnectionsResponse {
  total: number;
}

export function Landing({}: TotalConnectionsResponse) {
  const navigation = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  function handleNavigateToStudyPages() {
    navigation.dispatch(CommonActions.navigate({ name: 'study' }));
  }

  function handleNavigateToGiveClassesPage() {
    navigation.dispatch(CommonActions.navigate({ name: 'giveClasses' }));
  }

  useEffect(() => {
    api.get('/connections')
      .then(response => {
        setTotalConnections(response.data.total);
      });
  }, []);

  return (
    <ContainerLanding>
      <Logo source={landingImg} />

      <Title >
        Seja bem-vindo, {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <ButtonPrimary onPress={handleNavigateToStudyPages}>
          <Feather name="book-open" size={40} color="white" />
          <ButtonText>Estudar
          </ButtonText>
        </ButtonPrimary>

        <ButtonSecundary onPress={handleNavigateToGiveClassesPage}>
          <Feather name="tv" size={40} color="white" />
          <ButtonText>Dar aulas
          </ButtonText>
        </ButtonSecundary>
      </ButtonsContainer>

      <TotalConnections>
        Total de {totalConnections} conexões já realizadas {' '}
        <Image source={heartIcon} />
      </TotalConnections>
    </ContainerLanding>
  );
}

