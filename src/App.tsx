import { Header } from './components/Header';
import { PostsProvider } from './contexts/PostsContext';
import { ViewsProvider } from './contexts/ViewsContext';
import { ListView } from './components/ListView';
import { Form } from './components/Form';

import { CssBaseline } from '@mui/material';
import { MainContainer } from './styles';

export function App() {
  return (
    <PostsProvider>
      <ViewsProvider>
        <CssBaseline />
        <Header />
        <MainContainer>
          <Form />
          <ListView />
        </MainContainer>
      </ViewsProvider>
    </PostsProvider>
  );
}