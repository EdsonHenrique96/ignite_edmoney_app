import logoImg from '../../assets/logo.svg';
import { HeaderContainer, HeaderContent } from './style';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="logo"/>
        <button>Nova transação</button>
      </HeaderContent>
    </HeaderContainer>
  )  
}