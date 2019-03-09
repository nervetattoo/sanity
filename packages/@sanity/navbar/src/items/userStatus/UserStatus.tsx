import * as React from 'react'
import SignOutAction from 'part:@sanity/base/sign-out-icon'
import Menu from 'part:@sanity/components/menus/default'

import * as styles from './UserStatus.module.css'

import {Props} from './types'

function UserStatus({menuVisible, onHideMenu, onMenuItemClick, onShowMenu, user}: Props) {
  return (
    <div className={styles.root}>
      <button className={styles.button} onClick={onShowMenu} title="Show user menu" type="button">
        <div className={styles.inner} tabIndex={-1}>
          {user.profileImage ? (
            <img
              src={user.profileImage}
              className={styles.userImage}
              alt={`${user.name}'s profile image`}
            />
          ) : (
            <div className={styles.userImageMissing}>
              {user.name ? user.name.charAt(0) : user.email.charAt(0)}
            </div>
          )}
        </div>
      </button>

      <div className={styles.userName}>{user.name}</div>

      {menuVisible && (
        <div className={styles.userMenu}>
          <Menu
            onAction={onMenuItemClick}
            items={[
              {
                title: `Log out ${user.name}`,
                icon: SignOutAction,
                action: 'signOut'
              }
            ]}
            origin="top-right"
            onClickOutside={onHideMenu}
          />
        </div>
      )}
    </div>
  )
}

export default UserStatus
