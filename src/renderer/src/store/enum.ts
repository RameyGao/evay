type PPriority = {
  [key in Plan.PlanPriority]: string
}
// 优先级
export const PRIORITY: PPriority = { none: '无', low: '低', middle: '中', high: '高' }
