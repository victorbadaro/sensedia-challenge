import { Header } from './components/Header';
import { PostsProvider } from './contexts/PostsContext';

import { CssBaseline } from '@mui/material';
import { MainContainer } from './styles';

export function App() {
  return (
    <PostsProvider>
      <CssBaseline />
      <Header />
      <MainContainer>
      </MainContainer>
    </PostsProvider>
  );
}