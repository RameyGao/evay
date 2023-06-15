// 计划表单，包含计划名称、计划描述、计划状态、计划执行时间、计划设置
import { SettingsIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { usePlanStore } from '@renderer/store/planSlice'
import { FC } from 'react'
import PlanStatus from '../PlanStatus'

// Form组件
const PlanForm: FC<PlanForm.Props> = ({ id, title, tag, priority, status, ...prop }) => {
  const { deletePlanById, setPlanStatus } = usePlanStore((state) => state)

  // 状态标记
  const onChangeStatus = (status: Plan.PlanStatus): void => {
    setPlanStatus({ id, priority, status })
  }

  // 计划删除
  const onDelete = (): void => {
    deletePlanById({ id, priority })
  }
  return (
    <Flex
      w="full"
      py={5}
      justify="space-between"
      align="center"
      userSelect="none"
      position="relative"
      {...prop}
    >
      {/* <DragLine style="absolute left-2/4 top-1 transform translate-x-1/2" /> */}
      {/* 计划状态 - 颜色标记 */}
      <PlanStatus status={status} />
      {/* 计划名称 修改、disabled... */}
      <Box
        w="96%"
        h="48px"
        lineHeight="48px"
        mx="5px"
        px="10px"
        borderRadius="lg"
        border="1px solid #EEE8E8"
        bg="white"
      >
        {title}
      </Box>
      {/* 设置：计划状态、操作 */}
      <Menu>
        <MenuButton as={Box} cursor="pointer">
          <SettingsIcon boxSize={5} />
        </MenuButton>
        <MenuList>
          <MenuGroup title="状态">
            <MenuItem onClick={(): void => onChangeStatus('delay')}>延后</MenuItem>
            <MenuItem onClick={(): void => onChangeStatus('complet')}>完成</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="计划">
            <MenuItem onClick={onDelete}>删除</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default PlanForm
