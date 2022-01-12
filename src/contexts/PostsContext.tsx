import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

type PostData = {
    id: number;
    title: string;
    body: string;
    userId: number;
}

type Post = {
    id: number;
    postId: number;
    title: string;
    author: string | undefined;
    body: string;
    createdAt: string;
}

type User = {
    id: number;
    name: string;
}

interface PostsProviderProps {
    children: ReactNode;
}

interface PostsContextProps {
    posts: Post[];
    filterPostsByTitle: (searchedTitle: string) => void;
}

const PostsContext = createContext<PostsContextProps>({} as PostsContextProps);

function PostsProvider({ children }: PostsProviderProps) {
    const [postsFromApi, setPostsFromApi] = useState<Post[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        (async () => {
            const postsResult = await api.get('/posts');
            const usersResult = await api.get('/users');

            const postsData: PostData[] = postsResult.data;
            const usersData: User[] = usersResult.data;

            let customPosts = postsData.map(post => {
                const user: User | undefined = usersData.find(user => user.id === post.userId);

                return {
                    id: post.id,
                    postId: post.id,
                    title: post.title,
                    author: user?.name,
                    body: post.body,
                    createdAt: `${new Date().toLocaleDateString('pt-BR')} ${new Date().toLocaleTimeString('pt-BR', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' })}`
                };
            });

            customPosts.sort((postA, postB) => {
                const titleA = postA.title.toLowerCase();
                const titleB = postB.title.toLowerCase();
    
                if(titleA < titleB)
                    return -1;
                
                if(titleA > titleB)
                    return 1;
                
                return 0;
            });

            setPostsFromApi(customPosts);
            setPosts(customPosts);
        })();
    }, []);

    function filterPostsByTitle(searchedTitle: string) {
        const filteredPosts = postsFromApi.filter(post => post.title.includes(searchedTitle.toLowerCase()));

        setPosts(filteredPosts);
    }

    return (
        <PostsContext.Provider value={{ posts, filterPostsByTitle }}>
            {children}
        </PostsContext.Provider>
    );
}

export { PostsContext, PostsProvider };