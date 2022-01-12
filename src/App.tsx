import { Header } from './components/Header';
import { PostsProvider } from './contexts/PostsContext';
import { ViewsProvider } from './contexts/ViewsContext';
import { Home } from './pages/Home';

import { CssBaseline } from '@mui/material';

export function App() {
  return (
    <PostsProvider>
      <ViewsProvider>
        <CssBaseline />
        <Header />
        <Home />
      </ViewsProvider>
    </PostsProvider>
  );
}