import { Header } from './components/Header';
import { PostsProvider } from './contexts/PostsContext';

import { CssBaseline } from '@mui/material';

export function App() {
  return (
    <PostsProvider>
      <CssBaseline />
      <Header />
    </PostsProvider>
  );
}