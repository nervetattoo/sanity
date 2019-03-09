import {withPropsStream} from 'react-props-stream'
import SanityStatus from './SanityStatus'
import {props$} from './props'

const SanityStatusContainer = withPropsStream<any, any>(props$ as any, SanityStatus)

export default {
  name: 'sanityStatus',
  component: SanityStatusContainer
}
