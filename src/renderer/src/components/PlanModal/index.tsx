import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Portal,
  Radio,
  RadioGroup,
  Select,
  Stack
} from '@chakra-ui/react'
import useMessage from '@renderer/hooks/useToast'
import { PRIORITY } from '@renderer/store/enum'
import { useModalStore } from '@renderer/store/modalSlice'
import { usePlanStore } from '@renderer/store/planSlice'
import { FC, ReactNode, useState } from 'react'

// 优先级列表
const priorityList: Array<[string, string]> = Object.entries(PRIORITY)

// 输入框组件
const PlanModal: FC = () => {
  const { open, plan, toggleModal } = useModalStore((state) => state)
  const { findAndUpdateTodayPlan } = usePlanStore((state) => state)
  const message = useMessage()
  const [data, setData] = useState(plan)

  // 更新计划的单个条目
  const handleChangeValue = (value: any): void => {
    setData({ ...data, ...value })
  }

  // 保存或更新计划
  const save = (): void => {
    if (!data.title) return
    // 存储计划
    findAndUpdateTodayPlan(data)
    // 关闭弹窗
    toggleModal(false)
    message({
      title: '保存成功',
      status: 'success',
      variant: 'subtle'
    })
  }

  return (
    <Portal>
      <Modal closeOnOverlayClick={false} isOpen={open} onClose={(): void => toggleModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>今天我要完成...</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>具体事项</FormLabel>
              <Input
                placeholder="我想想.."
                value={data.title}
                onChange={(e): void => handleChangeValue({ title: e.target.value })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>标签</FormLabel>
              <Select
                variant="filled"
                value={data.tag}
                onChange={(e): void => handleChangeValue({ tag: e.target.value })}
              >
                <option value="STUDY">自我提升</option>
                <option value="JOB">工作职能</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>优先级</FormLabel>
              <RadioGroup
                value={data.priority}
                onChange={(priority): void => handleChangeValue({ priority })}
              >
                <Stack direction="row">
                  {priorityList.map(
                    ([value, label]: [string, string]): ReactNode => (
                      <Radio value={value} key={label}>
                        {label}
                      </Radio>
                    )
                  )}
                </Stack>
              </RadioGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Center justifyContent="center">
              <>
                <Button onClick={(): void => toggleModal(false)}>取消</Button>
                <Button colorScheme="blue" ml={3} onClick={save}>
                  保存
                </Button>
              </>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Portal>
  )
}

export default PlanModal

// className={classnames(
//   'btn',
//   'btn-wide',
//   { 'btn-primary': plan.title },
//   'mx-auto'
// )}
