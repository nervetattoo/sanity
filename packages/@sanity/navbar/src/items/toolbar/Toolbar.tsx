import * as React from 'react'
import {withRouterHOC} from 'part:@sanity/base/router'
import tools from './tools'
import ToolbarItem from './ToolbarItem'

import * as styles from './Toolbar.module.css'

interface Props {
  minimized: boolean
  router: any
}

function Toolbar({minimized, router}: Props) {
  return (
    <ol className={minimized ? styles.minimized : styles.root}>
      {tools.map(tool => (
        <li key={tool.name}>
          <ToolbarItem
            icon={tool.icon}
            isActive={false}
            name={tool.name}
            routerState={router.state}
            showLabel={!minimized}
            title={tool.label}
          />
        </li>
      ))}
    </ol>
  )
}

export default withRouterHOC(Toolbar)
