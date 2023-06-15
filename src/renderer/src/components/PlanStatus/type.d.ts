declare namespace PlanStatus {
  type Props = {
    status: keyof TsList
  }

  type TsStatusBg = {
    outBg: string
    innerBg: string
  }
  type TsList = {
    ongoing: TsStatusBg
    delay: TsStatusBg
    complet: TsStatusBg
  }
}
