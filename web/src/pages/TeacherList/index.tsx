import { useCallback, useState } from 'react';

import { PageHeader } from '../../components/PageHeader';
import { Select } from '../../components/Select';

import { PageTeacherList, SearchTeachers } from './styles';

import { Input } from '../../components/Input';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { Loading } from '../../components/loading';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { TeacherItem } from '../../components/TeacherItem';

const schema = Yup.object({
  subject: Yup.string().required('Matéria é obrigatória'),
  week_day: Yup.number().required('Dia da semana é obrigatório'),
  time: Yup.string().required('Horário de início é obrigatório'),
})

export interface ScheduleItem {
  subject: string;
  week_day: number;
  time: string;
}

export function TeacherList() {
  const [loading, setLoading] = useState(false)

  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      week_day: 0,
      subject: '',
      time: '',
    }
  });

  /** 
  const handleOnSubmit = useCallback(
    async (data: ScheduleItem) => {
      try {
        setLoading(true)
        if (data !== undefined) {
          alert('Tudo Certo.')
        }
      } catch {
        Error('Ocorreu um erro ao fazer login, cheque as credenciais.')
        setLoading(false)
      }
    }, [],
  )
  */

  const handleOnSubmit = useCallback(
    async (data: ScheduleItem) => {
      const { time, week_day, subject } = data

      await api.get('users', {
        params: {
          subject,
          week_day,
          time,
        },
      })

      if (data !== undefined) {
        toast.success('Classe criada com sucesso!')
        console.log(data)
        return;
      }

      toast.error('Erro ao criar a classe!')

      setLoading(false)
    }, [],
  )

  return (
    <PageTeacherList>
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachers onSubmit={handleSubmit(handleOnSubmit)}>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação física', label: 'Educação física' },
              { value: 'Física', label: 'Fís  ica' },
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
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
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
          <TeacherItem  />
          <TeacherItem  />
          <TeacherItem  />
          <TeacherItem  />

      </main>
    </PageTeacherList>
  )
}
