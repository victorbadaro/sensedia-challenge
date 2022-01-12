import { useContext } from 'react';
import { ViewsContext } from '../contexts/ViewsContext';

export function useViews() {
    const context = useContext(ViewsContext);

    return context;
}