import { styled, Button, TextField, MenuItem } from '@mui/material';

export const StyledForm = styled('form')(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '3fr 1fr 245px',
    columnGap: '29px',
    alignItems: 'center',
    marginBottom: '43px',
    '& .buttons': {
        display: 'grid',
        gridTemplateColumns: '142px 95px',
        columnGap: '8px',
        height: '46px'
    }
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-root.MuiFilledInput-root:after': {
        borderBottomColor: '#5C21AA'
    },
    '& .MuiInputBase-input.MuiFilledInput-input': {
        padding: '7.5px 16px',
        color: '#6A6A6A'
    },
    '& .MuiSelect-select.MuiInputBase-input-MuiFilledInput-input': {
        padding: '7.5px 16px',
        fontSize: '16px',
        color: '#6A6A6A'
    },
    '& .MuiSvgIcon-fontSizeSmall': {
        marginRight: '8px',
        verticalAlign: 'sub',
        color: '#6A6A6A'
    }
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    '& .MuiSvgIcon-fontSizeSmall': {
        marginRight: '8px',
        verticalAlign: 'sub',
        color: '#6A6A6A'
    }
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
    height: '100%',
    borderRadius: '46px',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16px',
    letterSpacing: '1.25px',
    backgroundColor: '#5C21AA',
    '&:hover': {
        backgroundColor: '#430A81'
    }
}));

export const ClearButton = styled(Button)(({ theme }) => ({
    height: '100%',
    marginLeft: '8px',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '16px',
    letterSpacing: '1.25px',
    color: '#5C21AA'
}));