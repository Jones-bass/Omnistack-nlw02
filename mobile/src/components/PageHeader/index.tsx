import { Image } from 'react-native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { CommonActions, useNavigation } from '@react-navigation/native';


import React, { ReactNode } from 'react';
import { BorderlessButton, ContainerHeader, Header, Title, TopBar } from './styles';

interface PageHeaderProps {
  children: ReactNode
  title: string;
  headerRight?: () => JSX.Element;
}

export function PageHeader({
  title,
  headerRight,
  children,
  }: PageHeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.dispatch(CommonActions.navigate({ name: 'landing' }));

  }

  return (
    <ContainerHeader>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </TopBar>

      <Header>
        <Title>{title}</Title>
        {headerRight && headerRight()}

      </Header>

      {children}
    </ContainerHeader>
  );
};

