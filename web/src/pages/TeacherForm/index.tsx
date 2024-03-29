import { useState } from 'react';

import warningIcon from '../../assets/images/icons/warning.svg';
import { PageHeader } from '../../components/PageHeader';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Loading } from '../../components/loading';
import { TextArea } from '../../components/TextArea';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFieldArray, useForm } from 'react-hook-form';

import { toast } from 'react-toastify';
import { api } from '../../services/api';

import { FormMain, TeacherFormContainer } from './styles';

const schema = Yup.object({
  name: Yup.string().required('Nome é obrigatório'),
  avatar: Yup.string().required('Avatar é obrigatório'),
  whatsapp: Yup.string().required('Whatsapp é obrigatório'),
  bio: Yup.string().required('Biografia é obrigatória'),
  subject: Yup.string().required('Matéria é obrigatória'),
  cost: Yup.number()
    .required('O custo é obrigatório')
    .typeError('O custo deve ser um número')
    .min(20, 'O custo não acima de R$20'),
  schedule: Yup.array().of(
    Yup.object({
      week_day: Yup.number().required('Dia da semana é obrigatório'),
      from: Yup.string().required('Horário de início é obrigatório'),
      to: Yup.string().required('Horário de término é obrigatório'),
    })
  )
});

export interface UserFormData {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: {
    week_day: number;
    from: string;
    to: string;
  }
}

export function TeacherForm() {
  const [loading, setLoading] = useState(false)

  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      avatar: '',
      whatsapp: '',
      bio: '',
      subject: '',
      cost: 0,
      schedule: [{ week_day: 0, from: '', to: '' }]
    }
  });

  const { fields } = useFieldArray({
    control: control,
    name: "schedule"
  });

  async function hamdleCreateUser(data: UserFormData) {
    setLoading(true);

    try {
      await api.post('users', {
        ...data
      });

      console.log(data)
      toast.success('Classe criada com sucesso!');
    } catch (error) {
      toast.error('Erro ao criar a classe!');
    }

    setLoading(false);
  };


  return (
    <TeacherFormContainer>
      <PageHeader children
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <FormMain>
        <form onSubmit={handleSubmit(hamdleCreateUser)}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name='name'
              label="Nome completo"
              error={errors.name}
              control={control}
            />

            <Input
              name='avatar'
              label="Avatar"
              error={errors.avatar}
              control={control}
            />

            <Input
              name='whatsapp'
              label="Whatsapp"
              error={errors.whatsapp}
              control={control}
            />

            <TextArea
              name='bio'
              label="Biografia"
              error={errors.bio}
              control={control}
            />

          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name='subject'
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

            <Input
              name='cost'
              label="Custo da sua hora por aula"
              error={errors.cost}
              control={control}
            />

          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button">
                + Novo horário
              </button>
            </legend>

            {fields.map((field, index) => (
              <div key={field.id} className="schedule-item">
                <Select
                  name={`schedule.${index}.week_day`}
                  label="Dia da Semana"
                  options={[
                    { value: '1', label: 'Domingo' },
                    { value: '2', label: 'Segunda-Feira' },
                    { value: '3', label: 'Terça-Feira' },
                    { value: '4', label: 'Quarta-Feira' },
                    { value: '5', label: 'Quinta-Feira' },
                    { value: '6', label: 'Sexta-Feira' },
                    { value: '7', label: 'Sabado' },
                  ]}
                  error={errors.schedule && errors.schedule[index]?.week_day}
                  control={control}

                />
                <Input
                  name={`schedule.${index}.from`}
                  label="Das"
                  type="time"
                  error={errors.schedule && errors.schedule[index]?.from}
                  control={control}
                />

                <Input
                  name={`schedule.${index}.to`}
                  label="Até"
                  type="time"
                  error={errors.schedule && errors.schedule[index]?.to}
                  control={control}
                />

              </div>
            ))}

          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit" disabled={isSubmitting}>
              {loading ? <Loading /> : 'Salvar cadastro'}
            </button>
          </footer>
        </form>
      </FormMain>
    </TeacherFormContainer >
  )
}

