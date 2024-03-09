
import { PageHeader } from '../../components/PageHeader';
import { ContainerList } from './styles';
import { TeacherItem } from '../../components/TeacherItem';
import { ScrollView } from 'react-native';

export function TeacherList() {
  return (
    <ContainerList>
      <PageHeader title="Proffys disponíveis" children>
      </PageHeader>

   
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
          <TeacherItem/>
          <TeacherItem/>
          <TeacherItem/>
          <TeacherItem/>
          <TeacherItem/>
          <TeacherItem/>
          <TeacherItem/>
      </ScrollView>
    </ContainerList>
  );
};

