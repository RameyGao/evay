declare namespace PlanModalType {
  import { ReactElement } from 'react'
  type FuncType = () => void
  type Props = {
    className: string
    [prop: string]: string | number | unknown
  }
  type PlanInfo = {
    id?: string
    status?: 'ongoing'
    title: string
    tag: Plan.PlanTag
    priority: Plan.PlanPriority
  }
}
