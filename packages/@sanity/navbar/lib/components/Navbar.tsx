import * as React from 'react'
import {Config} from '../types'
import * as styles from './Navbar.module.css'

interface Props {
  children: any[]
  config: Config
}

function Navbar(props: Props) {
  return <div className={styles.root}>{props.children}</div>
}

export default Navbar
