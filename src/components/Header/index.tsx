import { HeaderContainer, Content } from './styles';

import logoImg from '../../assets/logo.svg';

export function Header() {
    return (
        <HeaderContainer position='static'>
            <Content>
                <img src={logoImg} alt="Logo Sensedia" />
            </Content>
        </HeaderContainer>
    );
}