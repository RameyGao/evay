import { create } from 'zustand'

// 初始状态
const initialState: Modal.ModalState = {
  open: false,
  plan: { title: '', tag: 'STUDY', priority: 'none' }
}

export const useModalStore = create<Modal.ModalState & Modal.ModalAction>((set) => ({
  ...initialState,
  // 切换modal状态
  toggleModal: (open): void => set((state) => ({ ...state, open })),
  // 设置当前modal数据
  setCurrentPlan: (plan): void =>
    set((state) => {
      state.plan = { ...state.plan, ...plan }
      return state
    })
}))
