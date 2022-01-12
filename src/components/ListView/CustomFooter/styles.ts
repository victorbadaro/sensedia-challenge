import { styled, Box } from '@mui/material';

export const StyledFooter = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '18px 48px',
    '& .total-results': {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#6A6A6A'
    }
}));