import { Grid, Card, Typography } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { usePosts } from '../../hooks/usePosts';

import { StyledCardContent, StyledFooter, StyledPagination } from './styles';

export function GridView() {
    const { posts } = usePosts();
    const [postsToShow, setPostsToShow] = useState(posts.slice(0, 8));
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPostsToShow(posts.slice(0, 8));
        setPage(1);
    }, [posts]);

    function handlePaginationChange(event: ChangeEvent<unknown>, value: number) {
        const offset = 8 * (value - 1);

        setPage(value);
        setPostsToShow(posts.slice(offset, offset + 8));
    }

    return (
        <>
            <Grid container spacing={2}>
                {postsToShow.map(post => (
                    <Grid key={post.id} item xs={3}>
                        <Card sx={{ height: '218px' }} variant='outlined'>
                            <StyledCardContent>
                                <Typography className='card-title' variant='h5'>{post.title}</Typography>
                                <Typography className='card-info' color='text.secondary'>{post.author}</Typography>
                                <Typography className='card-body' color='text.secondary'>{post.body}</Typography>
                                <Typography className='card-footer' color='text.secondary'>{post.createdAt}</Typography>
                            </StyledCardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <StyledFooter>
                <span className='total-results'>TOTAL RESULTS {posts.length}</span>
                <StyledPagination
                    count={Math.ceil(posts.length / 8)}
                    page={page}
                    onChange={handlePaginationChange}
                    color='secondary'
                />
            </StyledFooter>
        </>
    );
}