import { styled, AppBar } from '@mui/material';

export const Container = styled(AppBar)(({ theme }) => ({
    padding: '14px 0',
    backgroundColor: '#5C21AA'
}));

export const Content = styled('div')(({ theme }) => ({
    margin: '0 auto',
    width: '80%',
    lineHeight: '0'
}));