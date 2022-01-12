import { styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const CustomDataGrid = styled(DataGrid)(({ theme }) => ({
    '& .MuiDataGrid-columnSeparator--sideRight': {
        display: 'none'
    },
    '& .title-cell': {
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }
}));