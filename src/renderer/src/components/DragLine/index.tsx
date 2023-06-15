import { Box, Flex } from '@chakra-ui/react'
import { CSSProperties } from 'react'

const DragLine = ({
  lineLength = 3,
  style
}: {
  lineLength?: number
  style?: CSSProperties
}): JSX.Element => {
  return (
    <Flex w={8} h={2} direction="column" justify="space-between" style={style}>
      {Array.from({ length: lineLength })
        .fill(1)
        .map(
          (_: unknown, index: number): JSX.Element => (
            <Box w="full" h="px" bg="gray.400" key={index} />
          )
        )}
    </Flex>
  )
}

export default DragLine
