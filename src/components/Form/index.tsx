import { FormEvent, useState } from 'react';
import { Search as SearchIcon, FormatListBulleted as ListIcon, GridView as GridIcon } from '@mui/icons-material';
import { usePosts } from '../../hooks/usePosts';

import { StyledForm, StyledTextField, StyledMenuItem, SubmitButton, ClearButton } from './styles';

export function Form() {
    const [search, setSearch] = useState('');
    const [view, setView] = useState('list');
    const { filterPostsByTitle } = usePosts();

    function handleClearButtonClick() {
        setSearch('');
        filterPostsByTitle('');
    }

    function handleFormSubmit(event: FormEvent) {
        event.preventDefault();

        filterPostsByTitle(search);
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
                    onClick={handleClearButtonClick}
                >
                    CLEAR
                </ClearButton>
            </div>
        </StyledForm>
    );
}