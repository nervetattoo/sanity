import {throttle} from 'lodash'
import * as React from 'react'
import Navbar from '../../components/Navbar'
import NavbarItem from '../../components/NavbarItem'
import config from './config'
import items from './items'

interface ItemState {
  isIntersecting: boolean
}

interface State {
  items: ItemState[]
}

class NavbarContainer extends React.Component<{}, State> {
  elements: Array<HTMLDivElement | null>

  constructor(props: {}) {
    super(props)
    this.elements = config.items.map(() => null)
    this.state = {
      items: config.items.map(() => ({isIntersecting: false}))
    }
    this.handleResize = throttle(this.handleResize, 1000)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    console.log('resize', this.state, this.elements)
  }

  setElement(element: HTMLDivElement | null, idx: number) {
    this.elements[idx] = element
  }

  render() {
    return (
      <Navbar config={config}>
        {config.items.map((itemConfig, idx) => {
          const item = items.find(i => i.name === itemConfig.name) || null
          const layout = {...(itemConfig.layout || {}), ...((item && item.layout) || {})}
          const options = {...(itemConfig.options || {}), ...((item && item.options) || {})}
          return (
            <NavbarItem
              item={item}
              key={itemConfig.name}
              layout={layout}
              minimized
              name={itemConfig.name}
              options={options}
              setElement={element => this.setElement(element, idx)}
            />
          )
        })}
      </Navbar>
    )
  }
}

export default NavbarContainer
