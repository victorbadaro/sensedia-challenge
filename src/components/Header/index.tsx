import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

export function Header() {
    return (
        <Container position='static'>
            <Content>
                <img src={logoImg} alt="Logo Sensedia" />
            </Content>
        </Container>
    );
}