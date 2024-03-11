import { TeacherItem } from '../../components/TeacherItem';
import { PageHeader } from '../../components/PageHeader';
import { Container, TeacherList } from './styles';
import { useState } from 'react';

export function Favorites() {
  const [favorites, setFavorites] = useState([]);

  return (
    <Container>
      <PageHeader children title="Meus Proffys favoritos" />
      <TeacherList
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
         {favorites.map((teacher) => (
          <TeacherItem key={teacher} />
        ))}
      </TeacherList>
    </Container>
  );
};

