import { useViews } from '../hooks/useViews';
import { Form } from '../components/Form';
import { ListView } from '../components/ListView';
import { GridView } from '../components/GridView';

import { MainContainer } from './styles';

export function Home() {
    const { view } = useViews();
    return (
        <MainContainer>
            <Form />
            {view === 'list' ? <ListView /> : <GridView />}
        </MainContainer>
    );
}