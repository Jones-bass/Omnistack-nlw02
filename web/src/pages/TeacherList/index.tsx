import { useState } from 'react';

import { PageHeader } from '../../components/PageHeader';
import { Select } from '../../components/Select';

import { PageTeacherList, SearchTeachers } from './styles';

import { Input } from '../../components/Input';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { Loading } from '../../components/loading';
import { api } from '../../services/api';
import { Teacher, TeacherItem } from '../../components/TeacherItem';
import { toast } from 'react-toastify';
import { ImageSearch } from '../../components/ImageSearch';

const schema = Yup.object({
  subject: Yup.string().required('Matéria é obrigatória'),
  week_day: Yup.string().required('Dia da semana é obrigatório'),
  time: Yup.string().required('Horário de início é obrigatório'),
})

export interface ScheduleItem {
  subject: string;
  week_day: string;
  time: string;
}

export function TeacherList() {
  const [loading, setLoading] = useState(false)

  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      week_day: '',
      subject: '',
      time: '',
    }
  });

  async function searchTeachers(data: ScheduleItem) {
    const { time, week_day, subject } = data;

    setLoading(true)

    try {
      const response = await api.get('users', {
        params: {
          subject,
          week_day,
          time,
        },
      });
      setTeachers(response.data);
      setLoading(false)
      console.log(response.data);
    } catch (error) {
      toast.error('Erro ao buscar professores');
    }
  }

  return (
    <PageTeacherList>
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachers onSubmit={handleSubmit(searchTeachers)}>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação física', label: 'Educação física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}

            error={errors.subject}
            control={control}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: '1', label: 'Domingo' },
              { value: '2', label: 'Segunda-feira' },
              { value: '3', label: 'Terça-feira' },
              { value: '4', label: 'Quarta-feira' },
              { value: '5', label: 'Quinta-feira' },
              { value: '6', label: 'Sexta-feira' },
              { value: '7', label: 'Sábado' },
            ]}
            error={errors.week_day}
            control={control}
          />

          <Input
            name="time"
            label="Hora"
            type='time'
            error={errors.time}
            control={control}
          />

          <button type="submit" disabled={isSubmitting}>
            {loading ? <Loading /> : 'Buscar'}

          </button>
        </SearchTeachers>
      </PageHeader>
      <main>
        {teachers.length > 0 ? (
          teachers.map((teacher) => (
            <TeacherItem key={teacher.class.id} teacher={teacher} />
          ))
        ) : (
          <ImageSearch />
        )}
      </main>
    </PageTeacherList>
  )
}
