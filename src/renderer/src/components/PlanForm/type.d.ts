declare namespace PlanForm {
  interface Props extends Plan.PlanItem {
    [prop: string]: unknown
  }
  type ListProps = {
    updateZoomId: (id: string) => void
    children: React.ReactNode
    [prop: string]: unknown
  }

  type PlanFormContext = {
    updateZoomId: (id: string) => void
  }
}
