import { QueryClient } from '@tanstack/react-query'
import * as React from 'react'

type ContextValue = {
  queryClient: QueryClient
}

export const Context = React.createContext<ContextValue>({ queryClient: new QueryClient() })

export const useContext = () => React.useContext(Context)
