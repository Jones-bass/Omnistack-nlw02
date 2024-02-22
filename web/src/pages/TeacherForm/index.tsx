import { useCallback, useState } from 'react';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';

import warningIcon from '../../assets/images/icons/warning.svg';

import { PageHeader } from '../../components/PageHeader';
import { Input } from '../../components/Input';

import { Loading } from '../../components/loading';
import { FormMain, TeacherFormContainer } from './styles';

const createUserSchema = z.object({
  nome: z
    .string()
    .min(1, {
      message: 'Nome é obrigatório',
    })
    .toLowerCase(),
  avatar: z
    .string()
    .min(1, {
      message: 'Campo obrigatório',
    }),
  whatsapp: z
    .string()
    .min(1, {
      message: 'Campo obrigatório',
    })
})

type CreateUserData = z.infer<typeof createUserSchema>

export function TeacherForm() {
  const [loading, setLoading] = useState(false)

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
    <TeacherFormContainer>
      <PageHeader children
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <FormMain>
        <FormProvider {...createUserForm}>
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <fieldset>
              <legend>Seus dados</legend>
              <Input
                name="nome"
                label="Nome"
                errorMessage={errors?.nome?.message ?? ''}
              />

              <Input
                name="avatar"
                label="Avatar"
                errorMessage={errors?.avatar?.message ?? ''}
              />

              <Input
                name="whatsapp"
                label="Whatsapp"
                errorMessage={errors?.whatsapp?.message ?? ''}
              />

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
        </FormProvider>
      </FormMain>
    </TeacherFormContainer>
  )
}

