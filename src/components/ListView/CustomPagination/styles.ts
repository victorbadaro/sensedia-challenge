import { styled, Pagination } from '@mui/material';

export const StyledPagination = styled(Pagination)(({ theme }) => ({
    '& button': {
        minWidth: '20px',
        width: '20px',
        height: '20px'
    },
    '& .css-19micn4-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
        backgroundColor: '#5C21AA'
    }
}));