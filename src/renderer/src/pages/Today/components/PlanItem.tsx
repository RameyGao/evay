import { Box } from '@chakra-ui/react'
import PlanForm from '@renderer/components/PlanForm'
import { memo } from 'react'

function PlanItem({ plan, isDragging, provided, index }: DnDPlanList.PlanItemProps): JSX.Element {
  return (
    <Box
      px={4}
      my={3}
      borderRadius="lg"
      border="1px"
      borderColor="lightblue"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={provided.draggableProps.style}
      data-is-dragging={isDragging}
      data-testid={plan.id}
      data-index={index}
      aria-label={`${plan.title} plan ${plan.priority}`}
    >
      <PlanForm {...plan} />
    </Box>
  )
}

export default memo<DnDPlanList.PlanItemProps>(PlanItem)
