import { createToastFn, useToast } from '@chakra-ui/react'

const useMessage = (): ReturnType<typeof createToastFn> => {
  const toast = useToast({
    position: 'top-right'
  })
  return toast
}

export default useMessage
