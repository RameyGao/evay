import { Box, Center, Container, Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'

// 计划追踪列表
const PlanTracking: FC = () => {
  // 全量的计划记录
  // const { allPlanList } = useSelector<Plan.IRootState, Plan.TodayPlan>((state) => state.plan)
  const allPlanList = [{ title: '321321' }]
  return (
    <Container maxW="container.2xl">
      {allPlanList.map((plan, index) => (
        <Flex
          h="67px"
          bg="white"
          align="center"
          justify="space-between"
          px="20px"
          borderRadius="xl"
          className="collapse bg-base-200"
          key={index}
          fontSize="14px"
        >
          {/* 标识 */}
          {/* 计划的优先级 */}
          <Text fontSize="24px" fontWeight={400}>
            {plan.title}
          </Text>
          <Flex w="200px" justify="space-between" align="center">
            <Flex justify="space-between" align="center" w="55px">
              <Box bg="#9C8AFF" w="10px" h="10px" borderRadius="10px" />
              已完成
            </Flex>
            <Text color="#DF5353" fontSize="12px">
              3天推迟
            </Text>
            <Center w="52px" h="17px" borderRadius="30px" color="white" bg="#323232">
              查看
            </Center>
          </Flex>
        </Flex>
      ))}
    </Container>
  )
}
export default PlanTracking
