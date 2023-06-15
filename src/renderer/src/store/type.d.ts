declare namespace Plan {
  // 计划状态
  type PlanStatus = 'ongoing' | 'delay' | 'complet'
  // | 'cancel' | 'delete' | string
  // 计划标签
  type PlanTag = 'STUDY' | 'JOB'
  // 计划优先级
  type PlanPriority = 'none' | 'low' | 'middle' | 'high'

  // 单条计划记录
  type PlanItem = {
    id: string
    title: string
    tag: PlanTag
    priority: PlanPriority
    status: PlanStatus
  }
  // 排序的计划对象
  interface TodayPlan {
    [key: string]: PlanItem[]
  }

  // 所有的计划记录
  interface AllPlanList {
    [key: string]: PlanItem[]
  }
  type PlanState = {
    date: number
    todayList: TodayPlan
    allPlanList: AllPlanList | []
  }

  type UpdatePlanPayload = {
    id: string
    key: keyof PlanItem
    value: string | PlanStatus
    priority: Plan.PlanPriority
  }

  type PlanAction = {
    findAndUpdateTodayPlan: (plan: Partial<Plan.PlanItem>) => void
    setTodayPlan: (plan: Plan.UpdatePlanPayload) => void
    updateTodayPlanByIndex: (plan: any) => void
    deletePlanById: (plan: any) => void
    setPlanStatus: (plan: any) => void
  }
}

declare namespace Modal {
  type ModalState = {
    open: boolean
    plan: Partial<Plan.PlanItem>
  }
  type ModalAction = {
    toggleModal: (open: boolean) => void
    setCurrentPlan: (plan: Partial<Modal.ModalState.plan>) => void
  }
}
