export interface ContainerProps {}

export interface Props {
  menuVisible: boolean
  onHideMenu: () => void
  onMenuItemClick: (item: any) => void
  onShowMenu: () => void
  user: any
}
