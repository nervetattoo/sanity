import * as React from 'react'
import NavbarItem from './NavbarItem'

import * as styles from './Navbar.module.css'

import {Props as ItemProps} from './NavbarItem'

export interface Props {
  items: ItemProps[]
}

function Navbar({items}: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        {items.map(item => (
          <NavbarItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Navbar
