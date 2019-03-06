import * as React from 'react'

import {Item, ItemLayoutConfig} from '../types'
import * as styles from './NavbarItem.module.css'

interface Props {
  item: Item | null
  layout: ItemLayoutConfig
  minimized?: boolean
  name: string
  options: {[key: string]: any}
  setElement?: (element: HTMLDivElement | null) => void
}

function renderNavbarItem(item: Item | string, minimized: boolean | undefined, options: any) {
  if (typeof item === 'string') {
    return <div>(missing: {item})</div>
  }

  const ItemComponent = item.component

  return <ItemComponent minimized={minimized} options={options} />
}

function NavbarItem(props: Props) {
  const {item, layout, name, options, setElement} = props
  const style: any = {}

  if (layout.width === 'auto') {
    style.flex = '1'
  }

  return (
    <div className={styles.root} style={style} ref={setElement}>
      {renderNavbarItem(item || name, props.minimized, options)}
    </div>
  )
}

export default NavbarItem
