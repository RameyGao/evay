import { CalendarIcon, DragHandleIcon } from '@chakra-ui/icons'

export const getMenuItems = (): SideBar.SideItem[] => {
  return [
    {
      title: '首页',
      link: '/index',
      icon: <CalendarIcon />
    },
    {
      title: '今日',
      link: '/today',
      icon: <CalendarIcon />
    },
    {
      title: '追溯',
      link: '/plan-tracking',
      icon: <CalendarIcon />
    }
  ]
}

export const getOptionItems = (): SideBar.SideItem[] => [
  // 设置
  {
    title: '设置',
    link: '/setting',
    icon: <DragHandleIcon />
  },
  // 切换主题色
  {
    icon: <DragHandleIcon />,
    click: (): void => {
      // 切换主题色
      // MdOutlineWbSunny
      // MdOutlineNightlight
      return
    }
  },
  // 留言
  {
    title: '留言',
    link: '/leave-message',
    icon: <DragHandleIcon />
  }
]
