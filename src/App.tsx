import { Header } from './components/Header';
import { PostsProvider } from './contexts/PostsContext';
import { ListView } from './components/ListView';
import { Form } from './components/Form';

import { CssBaseline } from '@mui/material';
import { MainContainer } from './styles';

export function App() {
  return (
    <PostsProvider>
      <CssBaseline />
      <Header />
      <MainContainer>
        <Form />
        <ListView />
      </MainContainer>
    </PostsProvider>
  );
}