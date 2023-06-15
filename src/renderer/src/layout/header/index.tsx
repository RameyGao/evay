import { Box, Flex, Text } from '@chakra-ui/react'
import DayTime from '@renderer/components/DayTime'
import { FC } from 'react'

const PageHeader: FC<LayoutHeader.Props> = ({ title, children }) => {
  return (
    <Box pb="22px" pos="relative">
      <Flex align={'baseline'}>
        <Text fontSize="2xl" color="black" as="b">
          {title}
        </Text>
        <DayTime ml="8px" />
      </Flex>
      {children}
    </Box>
  )
}

export default PageHeader
