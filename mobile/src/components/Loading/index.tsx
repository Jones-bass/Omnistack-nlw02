import { ActivityIndicator } from 'react-native';

import { Container } from './styles';
import { theme } from '../../theme';

export function Loading() {
  return (
    <Container>
      <ActivityIndicator color={theme.colors.primary} />
    </Container>
  );
}
