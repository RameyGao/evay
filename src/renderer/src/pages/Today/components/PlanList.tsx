import { Box } from '@chakra-ui/react'
import CSS from 'csstype'
import type {
  DraggableProvided,
  DraggableStateSnapshot,
  DroppableProvided,
  DroppableStateSnapshot
} from 'react-beautiful-dnd'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import PlanItem from './PlanItem'
export const getBackgroundColor = (isDraggingOver: boolean, isDraggingFrom: boolean): string => {
  if (isDraggingOver) {
    return 'bg-red-400'
  }
  if (isDraggingFrom) {
    return 'bg-red-600'
  }
  return 'bg-red-300'
}

const grid = 8

const getItemStyle = (isDragging: boolean, draggableStyle: CSS.Properties): CSS.Properties => {
  return {
    userSelect: 'none',
    padding: `${grid * 2}px`,
    margin: `0 0 0 0`,
    background: isDragging ? 'green' : 'transparent',
    ...draggableStyle
  }
}

const getListStyle = (isDraggingOver: boolean): CSS.Properties & { rounded: string } => {
  return {
    background: isDraggingOver ? 'lightyellow' : 'transparent',
    rounded: 'md'
  }
}

export default function PlanList({
  planList,
  listId = 'none',
  listType,
  isDropDisabled,
  ignoreContainerClipping,
  isCombineEnabled
}: DnDPlanList.Props): JSX.Element {
  return (
    <Droppable
      droppableId={listId}
      type={listType}
      ignoreContainerClipping={ignoreContainerClipping}
      isDropDisabled={isDropDisabled}
      isCombineEnabled={isCombineEnabled}
    >
      {(dropProvided: DroppableProvided, dropSnapshot: DroppableStateSnapshot): JSX.Element => {
        return (
          <Box
            bg={getBackgroundColor(dropSnapshot.isDraggingOver, !!dropSnapshot.isDraggingFrom)}
            opacity={isDropDisabled ? '50' : '100'}
            {...dropProvided.droppableProps}
            style={getListStyle(dropSnapshot.isDraggingOver)}
          >
            <Box ref={dropProvided.innerRef}>
              {planList?.map((plan: Plan.PlanItem, index: number) => (
                <Draggable key={plan.id} draggableId={plan.id} index={index}>
                  {(
                    dragProvided: DraggableProvided,
                    dragSnapshot: DraggableStateSnapshot
                  ): JSX.Element => {
                    return (
                      //   <div
                      //     style={getItemStyle(
                      //       dragSnapshot.isDragging,
                      //       dragProvided.draggableProps.style
                      //     )}
                      //   >

                      <PlanItem
                        key={plan.id}
                        plan={plan}
                        isDragging={dragSnapshot.isDragging}
                        provided={dragProvided}
                        index={index}
                      />
                      //   </div>
                    )
                  }}
                </Draggable>
              ))}
              {dropProvided.placeholder}
            </Box>
          </Box>
        )
      }}
    </Droppable>
  )
}
