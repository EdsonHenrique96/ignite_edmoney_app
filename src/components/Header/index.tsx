import logoImg from '../../assets/logo.svg';
import { HeaderContainer, HeaderContent } from './style';

interface HeaderProps {
  onOpenModal: () => void;
}


export function Header({ onOpenModal }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="logo"/>
        <button onClick={onOpenModal} >Nova transação</button>
      </HeaderContent>
    </HeaderContainer>
  )  
}