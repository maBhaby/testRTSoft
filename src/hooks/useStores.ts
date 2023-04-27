import { useContext } from 'react';
import { RootStore } from '@/stores/Root';
import { StoreContext } from '@/context/StoreProvider';

export const useStores = (): RootStore => useContext(StoreContext);