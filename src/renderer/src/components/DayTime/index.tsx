import { Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import { FC, memo } from 'react'

const DayTime: FC<DayTime.Props> = (props) => {
  return (
    <Text color="black" {...props}>
      {dayjs().format('YYYY年M月DD日')}
    </Text>
  )
}

export default memo(DayTime)
