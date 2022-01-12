import { GridColDef } from '@mui/x-data-grid';
import { usePosts } from '../../hooks/usePosts';
import { CustomFooter } from './CustomFooter';

import { CustomDataGrid } from './styles';

const columns: GridColDef[] = [
  { field: 'postId', headerName: 'POSTID', width: 150, headerAlign: 'center', align: 'center', sortable: false, flex: 1 },
  { field: 'title', headerName: 'TITLE', width: 150, cellClassName: 'title-cell', flex: 1 },
  { field: 'author', headerName: 'AUTHOR', width: 150, sortable: false, flex: 1 },
  { field: 'body', headerName: 'BODY', width: 150, sortable: false, flex: 2 },
  { field: 'createdAt', headerName: 'CREATION DATE', width: 150, sortable: false, flex: 2 }
];

export function ListView() {
    const { posts } = usePosts();

    return (
        <div style={{ height: '587px', width: '100%' }}>
            <CustomDataGrid
                rows={posts}
                columns={columns}
                pageSize={10}
                disableColumnMenu
                headerHeight={48}
                rowHeight={48}
                components={{
                    Footer: CustomFooter
                }}
                componentsProps={{
                    footer: { postsLength: posts.length }
                }}
            />
        </div>
    );
}