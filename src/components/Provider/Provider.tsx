import React, { FC, PropsWithChildren, memo } from 'react'
import { ProviderProps } from './ProviderProps'
import { Context } from './Context'

export const Provider: FC<PropsWithChildren<ProviderProps>> = memo((props) => {
  const { children, queryClient } = props

  return <Context.Provider value={{ queryClient }}>{children}</Context.Provider>
})
