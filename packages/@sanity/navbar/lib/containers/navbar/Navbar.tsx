import * as React from 'react'
import Navbar from '../../components/Navbar'
import {Props as ItemProps} from '../../components/NavbarItem'
import config from './config'
import itemParts from './items'
import {setElement} from './state'

function NavbarContainer() {
  const items: Array<ItemProps> = config.items.map((itemConfig, idx) => {
    const itemPart = itemParts.find(i => i.name === itemConfig.name) || null

    if (!itemPart) {
      return {
        component: () => (
          <div>
            [unknown:
            {itemConfig.name}]
          </div>
        ),
        layout: {},
        minimized: false,
        options: {},
        setElement: (element: any) => setElement(element, idx)
      }
    }

    const layout = {...(itemConfig.layout || {}), ...((itemPart && itemPart.layout) || {})}
    const options = {...(itemConfig.options || {}), ...((itemPart && itemPart.options) || {})}

    const item: ItemProps = {
      component: itemPart.component,
      layout,
      minimized: false,
      options,
      setElement: element => setElement(element, idx)
    }

    return item
  })

  return <Navbar items={items} />
}

export default NavbarContainer
