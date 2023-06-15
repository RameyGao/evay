import { Box, Flex } from '@chakra-ui/react'
import { FC } from 'react'

const tsList: PlanStatus.TsList = {
  ongoing: { outBg: 'indigo.500', innerBg: 'pink.600' },
  delay: { outBg: 'purple.500', innerBg: 'green.600' },
  complet: { outBg: 'yellow.500', innerBg: 'red.600' }
}

const PlanStatus: FC<PlanStatus.Props> = ({ status }) => {
  return (
    <Flex w={10} h={10} borderRadius="full" shrink={0} align="center" bg={tsList[status]['outBg']}>
      <Box w={6} h={6} mx="auto" borderRadius="full" bg={tsList[status]['innerBg']} />
    </Flex>
  )
}
export default PlanStatus
