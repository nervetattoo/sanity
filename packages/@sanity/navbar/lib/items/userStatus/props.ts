import userStore from 'part:@sanity/base/user'
import {createEventHandler} from 'react-props-stream'
import {combineLatest, merge, of, Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {ContainerProps, Props} from './types'

const [menuVisibleNext$, setMenuVisible] = createEventHandler()

const menuVisibleInitial$ = of(false)
const menuVisible$ = merge(menuVisibleInitial$, menuVisibleNext$ as any) as Observable<boolean>

const user$ = userStore.currentUser.pipe(map((snapshot: any) => snapshot.user))

export function toPropsStream(props$: Observable<ContainerProps>): Observable<Props> {
  const onMenuItemClick = (item: any) => {
    switch (item.action) {
      case 'signOut':
        userStore.actions.logout()
        break
      default:
        console.warn(`Unknown action: ${item.action}`)
        break
    }
  }

  return combineLatest(props$, user$, menuVisible$).pipe(
    map(([_, user, menuVisible]: [any, any, boolean]) => ({
      menuVisible,
      onHideMenu: () => setMenuVisible(false),
      onMenuItemClick,
      onShowMenu: () => setMenuVisible(true),
      user
    }))
  )
}
