import { gridPaginationSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';

import { StyledPagination } from './styles';

export function CustomPagination() {
    const apiRef = useGridApiContext();
    const paginationState = useGridSelector(apiRef, gridPaginationSelector);

    return (
        <StyledPagination
            count={paginationState.pageCount}
            page={paginationState.page + 1}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
            color='secondary'
        />
    );
}