
import { PageHeader } from '../../components/PageHeader';
import { ContainerList, InputBlock, InputGroup, InputText, LabelText, SearchForm } from './styles';
import { TeacherItem } from '../../components/TeacherItem';
import { ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useCallback, useMemo, useState } from 'react';
import { BorderlessButton } from '../../components/PageHeader/styles';
import { RNPickerSelect } from '../../components/RNPickerSelect';
import { Item } from 'react-native-picker-select';

export function TeacherList() {

  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [week_day, setWeek_day] = useState('');


  const handleToggleFiltersVisible = useCallback(() => {
    setIsFiltersVisible(state => !state);
  }, []);

  const weekOptions = useMemo<Item[]>(() => {
    return [
      { value: '0', label: 'Domingo' },
      { value: '1', label: 'Segunda-Feira' },
      { value: '2', label: 'Terça-Feira' },
      { value: '3', label: 'Quarta-Feira' },
      { value: '4', label: 'Quinta-Feira' },
      { value: '5', label: 'Sexta-Feira' },
      { value: '6', label: 'Sábado' },
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
                />
              </InputBlock>
            </InputGroup>


          </SearchForm>
        )}

      </PageHeader>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
      </ScrollView>
    </ContainerList>
  );
};

