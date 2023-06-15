// @ts-nocheck
// @ts-ignore

import { create } from 'zustand'
import { useModalStore } from './modalSlice'
import { usePlanStore } from './planSlice'

const useStore = create((...a) => ({
  ...usePlanStore(...a),
  ...useModalStore(...a)
}))

export default useStore
