import { getUid } from '@renderer/utils/uuid'
import { create } from 'zustand'

// 生成一条计划
const generatePlan = (data: Partial<Plan.PlanItem>): Plan.PlanItem => {
  return {
    id: getUid(),
    title: '',
    tag: 'STUDY',
    priority: 'none',
    status: 'ongoing',
    ...data
  }
}

// 重组今日的计划列表
const combineTodayList = (
  planList: Plan.PlanItem[],
  newData: Partial<Plan.PlanItem>,
  key: keyof Plan.PlanItem
): Plan.PlanItem[] => {
  return planList.map((v) =>
    v[key] == newData[key]
      ? {
          ...v,
          ...newData
        }
      : v
  )
}

// 初始状态
const initialState: Plan.PlanState = {
  date: Date.now(),
  todayList: {
    high: [],
    middle: [],
    low: [],
    none: []
  },
  allPlanList: [] // 包含当天的计划列表
}

export const usePlanStore = create<Plan.PlanState & Plan.PlanAction>((set) => ({
  ...initialState,
  // 查找 => 新增 / 更新当天的计划
  findAndUpdateTodayPlan: (plan): void =>
    set((state) => {
      const { id, priority, lastpriority } = plan as unknown as {
        id: string
        priority: Plan.PlanPriority
        lastpriority?: Plan.PlanPriority
      }
      if (id) {
        if (lastpriority) {
          // 删除上一次，并新增到新的优先级列表下
          state.todayList[lastpriority] = state.todayList[lastpriority].filter(
            (v: Plan.PlanItem) => v.id !== id
          )
          const newPlan = generatePlan(plan)
          state.todayList[priority].push(newPlan)
        } else {
          state.todayList[priority] = combineTodayList(state.todayList[priority], plan, 'id')
        }
      } else {
        const newPlan = generatePlan(plan)
        state.todayList[priority] = [...state.todayList[priority], newPlan]
      }
      return state
    }),
  // 设置单条栏目
  setTodayPlan: (plan): void =>
    set((state) => {
      const { id, key, value, priority } = plan
      state.todayList[priority] = combineTodayList(
        state.todayList[priority],
        { id, [key]: value },
        'id'
      )
      return state
    }),
  // 根据索引更新排序
  updateTodayPlanByIndex: (plan): void =>
    set((state) => {
      const { list, priority } = plan
      state.todayList[priority] = list
      return state
    }),

  // 计划删除
  deletePlanById: (plan): void =>
    set((state) => {
      const { id, priority } = plan
      return {
        ...state,
        todayList: state.todayList[priority].filter((v: Plan.PlanItem) => v.id !== id)
      }
    }),

  // 标记当天计划状态
  setPlanStatus: (plan): void =>
    set((state) => {
      const { id, priority, status } = plan
      state.todayList[priority] = combineTodayList(state.todayList[priority], { id, status }, 'id')
      return state
    })

  // 获取所有的计划列表
}))
