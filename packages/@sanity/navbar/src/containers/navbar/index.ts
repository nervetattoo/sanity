import {withPropsStream} from 'react-props-stream'
import Navbar from '../../components/Navbar'
import {state$} from './state'

export const NavbarContainer = withPropsStream<any, any>(state$ as any, Navbar)
