import { CustomPagination } from '../CustomPagination';

import { StyledFooter } from './styles';

interface CustomFooterProps {
    postsLength: number;
}

export function CustomFooter({ postsLength }: CustomFooterProps) {
    return (
        <StyledFooter>
            <span className='total-results'>TOTAL RESULTS {postsLength}</span>
            <CustomPagination />
        </StyledFooter>
    );
}