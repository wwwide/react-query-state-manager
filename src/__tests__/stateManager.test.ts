import { QueryClient, useQueryClient } from '@tanstack/react-query'
import { renderHook, RenderHookResult, waitFor } from '@testing-library/react'
import TestRenderer from 'react-test-renderer'
import { ReactQueryWrapper } from '../utils'
import { useStateManager } from '../hooks'
import { StateManager } from '../types/StateManager'

const { act } = TestRenderer

const testData = {
  test: 'data'
}

let managerHook: RenderHookResult<any, StateManager> | undefined = undefined
let clientHook: RenderHookResult<any, QueryClient> | undefined = undefined
let sm: StateManager | undefined = undefined
let qc: QueryClient | undefined = undefined

describe('State manager hook works correctly', () => {
  beforeAll(async () => {
    managerHook = renderHook(() => useStateManager(), { wrapper: ReactQueryWrapper })
    clientHook = renderHook(() => useQueryClient(), { wrapper: ReactQueryWrapper })
    await waitFor(() => expect(managerHook?.result.current).toBeTruthy())
    await waitFor(() => expect(clientHook?.result.current).toBeTruthy())
    sm = managerHook.result.current
    qc = clientHook.result.current
  })

  test('useStateManager return expected value', async () => {
    expect(sm).toBeTruthy()
    expect(sm?.__client__).toBeInstanceOf(QueryClient)
    expect(sm?.get).toBeDefined()
    expect(sm?.invalidate).toBeDefined()
    expect(sm?.remove).toBeDefined()
    expect(sm?.set).toBeDefined()
    expect(sm?.use).toBeDefined()
  })

  test('Data getters and setters work correctly', async () => {
    /**
     * Check initial empty state.
     */

    const d1 = qc?.getQueryData(['test'])
    const d2 = sm?.get(['test'])
    expect(d1).toEqual(undefined)
    expect(d1).toEqual(d2)

    /**
     * At this point we're sure that our state manager reads data correctly.
     * Let's set data and read it then.
     */

    sm?.set(['test'], testData)
    const d3 = sm?.get(['test'])
    expect(d3).toEqual(testData)

    /**
     * Now clean up data and check the result.
     */

    sm?.remove(['test'])
    const d4 = sm?.get(['test'])
    expect(d4).toEqual(undefined)
  })

  test('Use data and data invalidation works correctly', async () => {
    let mutableName = 'First Last'

    const handler = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({ name: mutableName })
        }, 300)
      })

    const hook = renderHook(() => sm?.use(['test'], handler), {
      wrapper: ReactQueryWrapper
    })

    await waitFor(() => expect(hook?.result.current).toBeTruthy())

    expect(hook.result.current?.data).toEqual(undefined)
    expect(hook.result.current?.isFetching).toEqual(true)

    await waitFor(async () => { expect(hook?.result.current?.isFetching).toEqual(false) })
    
    expect(hook.result.current?.data).toEqual({ name: 'First Last' })

    mutableName = 'First Second'

    await act(async () => {
      await sm?.invalidate(['test'])
    })

    expect(hook.result.current?.data).toEqual({ name: 'First Second' })
  })
})
