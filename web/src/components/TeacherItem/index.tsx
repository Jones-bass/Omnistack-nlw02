import { useCallback } from "react";
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import { api } from "../../services/api";

import { TeacherItemWrapper } from "./styles";

export interface Teacher {
  class: {
    id: string | null | undefined;
    cost: number;
    subject: string;
    user: {
      avatar: string;
      bio: string;
      name: string;
      whatsapp: string;
    };
  };
}


interface TeacherItemProps {
  teacher: Teacher;
}

export function TeacherItem({teacher}: TeacherItemProps) {
  const handleCreateNewConnection = useCallback(() => {
    api.post('/users/connections', { user_id: teacher });
  }, [teacher]);

  return (
    <TeacherItemWrapper>
      <header>
      <img src={teacher.class.user.avatar} alt={teacher.class.user.name} />
        <div>
          <strong>{teacher.class.user.name}</strong>
          <span>{teacher.class.subject}</span>
        </div>
      </header>

      <p>{teacher.class.user.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.class.cost}</strong>
        </p>
        <a
          onClick={handleCreateNewConnection}
          href={`https://wa.me/${teacher.class.user.whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
   
      </footer>
    </TeacherItemWrapper>
  );
};

