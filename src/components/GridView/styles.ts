import { Box, CardContent, Pagination, styled } from '@mui/material';

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
    '& .card-title': {
        marginBottom: '8px',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '16px',
        textTransform: 'capitalize',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    },
    '& .card-info': {
        marginBottom: '20px',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '16px',
        color: '#6A6A6A'
    },
    '& .card-body': {
        display: '-webkit-box',
        marginBottom: '31px',
        maxHeight: '80px',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        color: '#919191'
    },
    '& .card-footer': {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '16px',
        color: '#6A6A6A'
    }
}));

export const StyledFooter = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '40px',
    '& .total-results': {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#6A6A6A'
    }
}));

export const StyledPagination = styled(Pagination)(({ theme }) => ({
    '& button': {
        minWidth: '20px',
        width: '20px',
        height: '20px'
    },
    '& .MuiButtonBase-root.MuiPaginationItem-root.Mui-selected': {
        backgroundColor: '#5C21AA'
    }
}));