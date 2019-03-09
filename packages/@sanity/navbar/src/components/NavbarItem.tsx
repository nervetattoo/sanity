import * as React from 'react'

import {ItemLayoutConfig} from '../types'
import * as styles from './NavbarItem.module.css'

export interface Props {
  component: React.ComponentFactory<any, any>
  layout: ItemLayoutConfig
  minimized: boolean
  name: string
  options: {[key: string]: any}
  setElement: (element: HTMLDivElement | null) => void
}

function NavbarItem(props: Props) {
  const {layout, minimized, options, setElement} = props
  const ItemComponent = props.component
  const style: any = {}

  if (layout.width === 'auto') {
    style.flex = '1'
  }

  return (
    <div className={styles.root} style={style} ref={setElement}>
      <ItemComponent minimized={minimized} options={options} />
    </div>
  )
}

export default NavbarItem
