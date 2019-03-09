import PluginIcon from 'part:@sanity/base/plugin-icon'
import {StateLink as Link} from 'part:@sanity/base/router'
import * as React from 'react'
import {Tooltip} from 'react-tippy'

import * as styles from './ToolbarItem.module.css'

interface Props {
  icon?: React.ComponentFactory<any, any>
  isActive: boolean
  name: string
  routerState: any
  showLabel: boolean
  title: string
}

function renderIcon(Icon?: React.ComponentFactory<any, any>) {
  if (typeof Icon !== 'function') {
    return <PluginIcon />
  }
  return <Icon />
}

function ToolbarItem({icon, isActive, name, routerState, showLabel, title}: Props) {
  const className = `${isActive ? styles.active : styles.root}`
  const linkState = {
    ...routerState,
    tool: name,
    [name]: undefined
  }
  return (
    <Link className={className} state={linkState}>
      <Tooltip
        arrow
        className={styles.tooltip}
        disabled={showLabel}
        distance={38}
        inertia
        sticky
        size="small"
        theme="dark"
        touchHold
        title={title}
      >
        <div className={styles.inner} tabIndex={-1}>
          <span className={styles.iconWrapper}>{renderIcon(icon)}</span>
          {showLabel && <span className={styles.labelWrapper}>{title}</span>}
        </div>
      </Tooltip>
    </Link>
  )
}

export default ToolbarItem
