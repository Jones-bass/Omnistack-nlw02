import { TeacherItemWrapper } from "./styles";
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


export function TeacherItem() {
  return (
    <TeacherItemWrapper>
      <header>
        <img src="https://github.com/jones-bass.png" alt="teacher.name" />
        <div>
          <strong>Jones Souza</strong>
          <span>Ciências</span>
        </div>
      </header>

      <p>Uma Bio de exemplo e interessante!</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 90,00</strong>
        </p>
        <a
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

