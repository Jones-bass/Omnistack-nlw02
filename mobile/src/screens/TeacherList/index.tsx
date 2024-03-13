
import { PageHeader } from '../../components/PageHeader';
import { ContainerList, InputBlock, InputGroup, InputText, LabelText, SearchForm, SubmitButton, SubmitButtonText } from './styles';
import { Teacher, TeacherItem } from '../../components/TeacherItem';
import { ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useCallback, useMemo, useState } from 'react';
import { BorderlessButton } from '../../components/PageHeader/styles';
import { RNPickerSelect } from '../../components/RNPickerSelect';
import { Item } from 'react-native-picker-select';
import { api } from '../../services/api';
import { ImageSearch } from '../../components/ImageSearch';

export function TeacherList() {

  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [week_day, setWeek_day] = useState('');
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [time, setTime] = useState('');

  const handleToggleFiltersVisible = useCallback(() => {
    setIsFiltersVisible(state => !state);
  }, []);

  const handleSubjectChange = (text: string) => {
    setSubject(text);
  };
  
  const handleTimeChange = (text: string) => {
    setTime(text);
  };

  const handleFiltersSubmit = useCallback(async () => {
    const response = await api.get('users', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
    setIsFiltersVisible(false);
  }, [subject, week_day, time]);

  const weekOptions = useMemo<Item[]>(() => {
    return [
      { value: '1', label: 'Domingo' },
      { value: '2', label: 'Segunda-Feira' },
      { value: '3', label: 'Terça-Feira' },
      { value: '4', label: 'Quarta-Feira' },
      { value: '5', label: 'Quinta-Feira' },
      { value: '6', label: 'Sexta-Feira' },
      { value: '7', label: 'Sábado' },
    ];
  }, []);

  const RenderRightIcon = useCallback(() => {
    return (
      <BorderlessButton
        style={{ padding: 8 }}
        onPress={handleToggleFiltersVisible}
      >
        <Feather name="filter" size={20} color="#fff" />
      </BorderlessButton>
    );
  }, [handleToggleFiltersVisible]);

  return (
    <ContainerList>
      <PageHeader title="Proffys disponíveis" headerRight={RenderRightIcon}>
        {isFiltersVisible && (
          <SearchForm>
            <LabelText>Matéria</LabelText>
            <InputText
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
              value={subject}
              onChangeText={handleSubjectChange}
            />

            <InputGroup>
              <InputBlock>
                <LabelText>Dia da semana</LabelText>
                <RNPickerSelect
                  items={weekOptions}
                  onValueChange={setWeek_day}
                />
              </InputBlock>
              <InputBlock>
                <LabelText>Horário</LabelText>
                <InputText
                  placeholder="Qual o horário?"
                  placeholderTextColor="#c1bccc"
                  type='time'
                  value={time}
                  onChangeText={handleTimeChange}
                  />
              </InputBlock>
            </InputGroup>

            <SubmitButton
              onPress={handleFiltersSubmit}
            >
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>


          </SearchForm>
        )}

      </PageHeader>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
      

        {teachers.length > 0 ? (
          teachers.map((teacher: Teacher) => (
            <TeacherItem key={teacher.class.id} teacher={teacher} />
          ))
        ) : (
          <ImageSearch />
        )}

      </ScrollView>
    </ContainerList>
  );
};

