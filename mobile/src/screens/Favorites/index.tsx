import { Teacher, TeacherItem } from '../../components/TeacherItem';
import { PageHeader } from '../../components/PageHeader';
import { Container, TeacherList } from './styles';
import { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { ImageSearch } from '../../components/ImageSearch';
import { v4 as uuidv4 } from 'uuid';

export function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = useCallback(async () => {
    const response = await AsyncStorage.getItem('@Proffy:favorites');

    if (response) {
      const favoritedTeachers = JSON.parse(response);
      setFavorites(favoritedTeachers);
    }
  }, []);

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <Container>
      <PageHeader children title="Meus Proffys favoritos" />
      <TeacherList
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.length > 0 ? (
          favorites.map((teacher: Teacher) => (
            <TeacherItem 
              key={teacher.class.id} 
              teacher={teacher}
              favorited
            />
          ))

        ) : (
          <ImageSearch />
        )}

      </TeacherList>
    </Container>
  );
};

