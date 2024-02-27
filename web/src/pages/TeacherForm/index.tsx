import { FormEvent, useCallback, useState } from 'react';

import warningIcon from '../../assets/images/icons/warning.svg';

import { PageHeader } from '../../components/PageHeader';
import { Input } from '../../components/Input';

import { FormMain, TeacherFormContainer } from './styles';
import { Select } from '../../components/Select';
import { api } from '../../services/api';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  avatar: Yup.string().required('Avatar é obrigatório'),
  whatsapp: Yup.string().required('Whatsapp é obrigatório'),
  bio: Yup.string().required('Biografia é obrigatória'),
  subject: Yup.string().required('Matéria é obrigatória'),
  cost: Yup.number().required('Custo deve ser um valor válido'),
  scheduleItems: Yup.array().of(
    Yup.object().shape({
      week_day: Yup.number().required('Dia da semana é obrigatório'),
      from: Yup.string().required('Horário de início é obrigatório'),
      to: Yup.string().required('Horário de término é obrigatório'),
    })
  ),
});

export function TeacherForm() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
  const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: '', to: '' }]);

  const addNewScheduleItem = () => {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  };


  const handleScheduleItemChange = useCallback(
    (index: number, field: string, value: string) => {
      const updatedScheduleItems = scheduleItems.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      );
      setScheduleItems(updatedScheduleItems);
    },
    [scheduleItems]
  );

  const handleFormSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        await schema.validate(
          {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems,
          },
        );

        await api.post('users', {
          name,
          avatar,
          whatsapp,
          bio,
          subject,
          cost: Number(cost),
          schedule: scheduleItems,
        });

        alert('Cadastro realizado com sucesso!');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          console.error(err);
        } else {
          console.error(err);
          alert('Ocorreu um erro!');
        }
      }
    },
    [name, avatar, whatsapp, bio, subject, cost, scheduleItems]
  );


  return (
    <TeacherFormContainer>
      <PageHeader children
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <FormMain>

        <form onSubmit={handleFormSubmit}>
          <fieldset>
            <legend>Seus dados</legend>

         
            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
            />

            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />

            <Input
              name="bio"
              label="Biografia"
              value={bio}
              onChange={e => setBio(e.target.value)}
            />

          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

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
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
              ]}
            />

            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={e => setCost(e.target.value)}
            />

          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  name="week-day"
                  label="Dia da Semana"
                  value={scheduleItem.week_day}
                  onChange={e => {
                    handleScheduleItemChange(index, 'week_day', e.target.value);
                  }}
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-Feira' },
                    { value: '2', label: 'Terça-Feira' },
                    { value: '3', label: 'Quarta-Feira' },
                    { value: '4', label: 'Quinta-Feira' },
                    { value: '5', label: 'Sexta-Feira' },
                    { value: '6', label: 'Sabado' },
                  ]}
                />
                <Input
                  name="from"
                  label="Das"
                  type="time"
                  value={scheduleItem.from}
                  onChange={e => {
                    handleScheduleItemChange(index, 'from', e.target.value);
                  }}

                />

                <Input
                  name="to"
                  label="Até"
                  type="time"
                  value={scheduleItem.to}
                  onChange={e => {
                    handleScheduleItemChange(index, 'to', e.target.value);
                  }}

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
            <button type="submit"> Salvar cadastro
            </button>
          </footer>
        </form>
      </FormMain>
    </TeacherFormContainer>
  )
}

