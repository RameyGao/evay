import { SmallAddIcon } from '@chakra-ui/icons'
import { Box, Circle } from '@chakra-ui/react'
import PlanModal from '@renderer/components/PlanModal'
import { useModalStore } from '@renderer/store/modalSlice'
import { usePlanStore } from '@renderer/store/planSlice'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { FC, useMemo } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import PlanList from './components/PlanList'
dayjs.extend(isBetween)

/**
 * 空白计划，根据时间点引导新建计划
 * 0:00 - 11:59 早上好，用Dangxia开启新一天的快乐生活吧
 * 12:00 - 17:59 中午好，上午未见计划喔，开启今天的计划吧
 * 18:01 - 23:59 晚上好，今天好像没有什么重要计划哦
 */
const EmptyToday: FC = () => {
  const desc = useMemo(() => {
    if (dayjs().isBetween(dayjs('YYYY-MM-DD 00:00'), dayjs('YYYY-MM-DD 11:59'), 'minute')) {
      return '早上好，用Dangxia开启新一天的快乐生活吧'
    }
    if (dayjs().isBetween(dayjs('YYYY-MM-DD 12:00'), dayjs('YYYY-MM-DD 17:59'), 'minute')) {
      return '中午好，上午未见计划喔，开启今天的计划吧'
    }
    return '晚上好，今天未开启计划，明天不要忘记哦'
  }, [])
  return (
    <div className="h-[40vh] flex justify-center items-center">
      <div className="text-[24px] font-bold text-[#828282]">{desc}</div>
    </div>
  )
}

// a little function to help us with reordering the result
const reorder = (list: Plan.PlanItem[], startIndex: number, endIndex: number): Plan.PlanItem[] => {
  const result = [...list]
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

// 当天的计划新建修改
const Today: FC = () => {
  const { toggleModal } = useModalStore((state) => state)
  const { todayList } = usePlanStore((state) => state)
  const plan = usePlanStore((state) => state)
  // useEffect(() => {
  //   // TODO:若无计划，默认新增第一条
  //   // 当新增一条计划，展开所在计划的缩放
  //   if (todayList?.length > 0) {
  //     updateZoomId(todayList[todayList.length - 1].id)
  //   }
  // }, [todayList])
  // useEffect(() => {
  //   return () => {
  //     // 离开页面时，更新计划到后台
  //     console.log('......', todayList)
  //   }
  // }, [todayList])

  const onDragEnd = (result: {
    destination: { index: number }
    source: { index: number }
    type: Plan.PlanPriority
  }): void => {
    const { destination, source, type } = result
    if (!destination) {
      return
    }
    // 更新排序
    // const list = reorder(todayList[type], source.index, destination.index)
    // dispatch(
    //   updateTodayPlanByIndex({
    //     list,
    //     priority: type
    //   })
    // )
  }
  const PlanPrioritys = ['high', 'middle', 'low', 'none'] as Plan.PlanPriority[]

  return (
    <div>
      {Object.values(todayList).flat(1)?.length === 0 ? (
        <EmptyToday />
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          {PlanPrioritys.map((key: Plan.PlanPriority): JSX.Element => {
            return (
              <Box my={4} key={key}>
                <PlanList planList={todayList[key]} listId={key} listType={key} />
              </Box>
            )
          })}
        </DragDropContext>
      )}

      <Circle
        position="fixed"
        right="28px"
        bottom="36px"
        cursor="pointer"
        bg="red"
        color="white"
        onClick={(): void => toggleModal(true)}
      >
        <SmallAddIcon boxSize={50} />
      </Circle>
      <PlanModal />
    </div>
  )
}
export default Today
