import { Header } from './components/Header';
import { PostsProvider } from './contexts/PostsContext';
import { ListView } from './components/ListView';

import { CssBaseline } from '@mui/material';
import { MainContainer } from './styles';

export function App() {
  return (
    <PostsProvider>
      <CssBaseline />
      <Header />
      <MainContainer>
        <ListView />
      </MainContainer>
    </PostsProvider>
  );
}