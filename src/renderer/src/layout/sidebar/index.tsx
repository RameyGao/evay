import { Box, Button, Circle, Flex, Text } from '@chakra-ui/react'
import { FC, cloneElement } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getMenuItems, getOptionItems } from './constant'

const Sidebar: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // 验证选中
  const isChecked = (link: string | undefined): boolean => !!link && location.pathname === link

  // 渲染Menu
  const RenderMenuItem: FC<SideBar.SideItem[]> = (list) =>
    list.map(({ title = '', icon, link, click }) => (
      <Flex
        direction="column"
        align="center"
        py="20px"
        cursor="pointer"
        onClick={(): void => (link ? navigate(link) : click?.())}
        key={title}
      >
        {cloneElement(icon as JSX.Element, {
          color: isChecked(link) ? '#8774E7' : '#003400',
          size: '28px'
        })}
        <Text fontSize="12px" mt="5px">
          {title}
        </Text>
      </Flex>
    ))

  return (
    <Flex w="80px" h="100vh" bg="#f3f3f3" direction="column" justify="space-between" align="center">
      <Flex direction="column" align="center" justify="space-between">
        <Box my="20px" textColor="white">
          <Circle size="40px" bg="tomato" color="white">
            Evay
          </Circle>
        </Box>
        {/* 菜单栏 */}
        {RenderMenuItem(getMenuItems())}
      </Flex>

      {/* 操作栏 */}
      <Button>颜色</Button>
      <Box>{RenderMenuItem(getOptionItems())}</Box>
    </Flex>
  )
}

export default Sidebar
