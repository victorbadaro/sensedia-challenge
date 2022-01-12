import { FormEvent, useState } from 'react';
import { Search as SearchIcon, FormatListBulleted as ListIcon, GridView as GridIcon } from '@mui/icons-material';

import { StyledForm, StyledTextField, StyledMenuItem, SubmitButton, ClearButton } from './styles';

export function Form() {
    const [search, setSearch] = useState('');
    const [view, setView] = useState('list');

    function handleFormSubmit(event: FormEvent) {
        event.preventDefault();

        console.log({ search, view });
    }

    return (
        <StyledForm onSubmit={handleFormSubmit}>
            <StyledTextField
                variant='filled'
                size='small'
                placeholder='Type for search...'
                value={search}
                onChange={event => setSearch(event.target.value)}
            />

            <StyledTextField
                select
                variant='filled'
                size='small'
                value={view}
                onChange={event => setView(event.target.value)}
            >
                <StyledMenuItem value='list'>
                    <ListIcon fontSize='small' />
                    List View
                </StyledMenuItem>
                <StyledMenuItem value='grid'>
                    <GridIcon fontSize='small' />
                    Grid View
                </StyledMenuItem>
            </StyledTextField>

            <div className='buttons'>
                <SubmitButton
                    variant='contained'
                    type='submit'
                    startIcon={<SearchIcon />}

                >
                    SEARCH
                </SubmitButton>
                <ClearButton
                    variant='text'
                    onClick={() => setSearch('')}
                >
                    CLEAR
                </ClearButton>
            </div>
        </StyledForm>
    );
}