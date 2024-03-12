import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Content, Description, OkButton, OkButtonText, TitleClass } from './styles';

export function GiveClasses() {
  const { goBack } = useNavigation();

  const handleNavigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Content>
        <TitleClass>Quer ser um Proffy?</TitleClass>
        <Description>
          Para comerçar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>
      </Content>

      <OkButton onPress={handleNavigateBack}>
        <OkButtonText>Tudo bem</OkButtonText>
      </OkButton>
    </Container>
  );
};

