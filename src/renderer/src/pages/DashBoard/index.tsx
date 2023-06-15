import { Grid, GridItem, Text } from '@chakra-ui/react'
import { FC } from 'react'

const Progress = [
  { text: 'Ongoing', value: 3, bg: 'gray.300' },
  { text: 'Delay', value: 3, bg: 'indigo' },
  { text: 'Complet', value: 3, bg: 'green.300' },
  { text: 'Cancel', value: 3, bg: 'yellow.300' }
]
const CardList: FC<DashBoard.CardListProps> = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={5} minW="400px" w="800px">
      {Progress.map((v) => (
        <GridItem w="33px" h="35px" bg={v.bg} rounded="10px" key={v.text}>
          <Text fontSize="3xl">{v.text}</Text>
          <Text fontSize="2xl">{v.value} plans</Text>
        </GridItem>
      ))}
    </Grid>
  )
}
const Summary: FC = ({}: DashBoard.TodayScheduleProps) => {
  return <div>Summary</div>
}
const TodaySchedule: FC = ({}: DashBoard.TodayScheduleProps) => {
  return <div>today</div>
}

const WeekSchedule: FC = ({}: DashBoard.WeekScheduleProps) => {
  return <div>weekschedule</div>
}

const Notification: FC = ({}: DashBoard.NotificationProps) => {
  return <div>Notification</div>
}

// dashboard
const Dashboard: FC = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-col w-[560px]">
          <CardList />
          <Summary />
        </div>
        <div />
        <div className="flex">
          <TodaySchedule />
        </div>
      </div>
      <WeekSchedule />
      <Notification />
    </div>
  )
}

export default Dashboard
export { CardList, Notification, Summary, TodaySchedule, WeekSchedule }
