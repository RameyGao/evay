declare namespace DnDPlanList {
  import type { Provided, StateSnapshot, DraggableProvided } from 'react-beautiful-dnd'

  type Props = {
    planList: Plan.PlanItem[]
    listId: Plan.PlanPriority
    listType: Plan.PlanPriority
    isDropDisabled?: boolean
    ignoreContainerClipping?: boolean
    isCombineEnabled?: boolean
  }
  type InnerListProps = {
    planList: Plan.PlanItem[]
    dropProvided: Provided
    snapshot: StateSnapshot
    provided: DraggableProvided
  }
  type PlanListProps = {
    planList: Plan.PlanItem[]
    snapshot: StateSnapshot
    provided: DraggableProvided
  }
  type PlanItemProps = {
    plan: Plan.PlanItem
    isDragging: boolean
    provided: DraggableProvided
    index?: number
  }
}
