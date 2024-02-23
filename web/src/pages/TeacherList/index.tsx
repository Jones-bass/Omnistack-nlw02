import { useCallback, useState } from 'react';

import { PageHeader } from '../../components/PageHeader';
import { Select } from '../../components/Select';

import { PageTeacherList, SearchTeachers } from './styles';
import { z } from 'zod';
import { Input } from '../../components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Loading } from '../../components/loading';

const createUserSchema = z.object({
  time: z
    .string()
    .min(1, {
      message: 'Nome é obrigatório',
    })
})

type CreateUserData = z.infer<typeof createUserSchema>

export function TeacherList() {
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [loading, setLoading] = useState(false);

  const createUserForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema),
  })

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = createUserForm

  const handleOnSubmit = useCallback(
    async (data: CreateUserData) => {
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


  return (
    <PageTeacherList>
      <PageHeader title="Estes são os proffys disponíveis.">
        <FormProvider {...createUserForm}>
          <SearchTeachers onSubmit={handleSubmit(handleOnSubmit)}>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => { setSubject(e.target.value) }}
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
            />

            <Select
              name="week_day"
              label="Dia da semana"
              value={week_day}
              onChange={(e) => { setWeekDay(e.target.value) }}
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda-feira' },
                { value: '2', label: 'Terça-feira' },
                { value: '3', label: 'Quarta-feira' },
                { value: '4', label: 'Quinta-feira' },
                { value: '5', label: 'Sexta-feira' },
                { value: '6', label: 'Sábado' },
              ]}
            />

            <Input
              type="time"
              name="time"
              label="Hora"
              errorMessage={errors?.time?.message ?? ''}
            />

            <button type="submit" disabled={isSubmitting}>
              {loading ? <Loading /> : 'Buscar'}

            </button>
          </SearchTeachers>
        </FormProvider>
      </PageHeader>
    </PageTeacherList>
  )
}
