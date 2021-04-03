import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionMondal: () => void;
}

export function Header({ onOpenNewTransactionMondal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="DT Money Logo" />
        <button type="button" onClick={onOpenNewTransactionMondal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
