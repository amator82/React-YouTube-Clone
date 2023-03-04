import { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'

import { RootState } from '../redux/reducers'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
