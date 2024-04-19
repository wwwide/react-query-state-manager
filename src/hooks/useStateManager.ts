import { useRemove } from './useRemove'
import { useSet } from './useSet'
import { useGet } from './useGet'
import { useUse } from './useUse'
import { useInvalidate } from './useInvalidate'
import { StateManager } from '../types/StateManager'
import { useContext } from '../components/Provider'

/**
 * Hook returning set of functions to work with state.
 * @returns {StateManager} - Set of functions to work with state.
 */
export const useStateManager = (): StateManager => {
  const { queryClient } = useContext()
  const { remove, removeAll } = useRemove(queryClient)
  const { set } = useSet(queryClient)
  const { get } = useGet(queryClient)
  const { invalidate } = useInvalidate(queryClient)
  const { use } = useUse(queryClient)

  return {
    __client__: queryClient,
    get,
    set,
    invalidate,
    remove,
    removeAll,
    use
  }
}
