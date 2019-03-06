import {withPropsStream} from 'react-props-stream'
import SanityStatus from './SanityStatus'
import {props$} from './props'

// import {ContainerProps, Props} from './types'

// const UserStatusContainer = withPropsStream<ContainerProps, Props>(toPropsStream as any, UserStatus)

const SanityStatusContainer = withPropsStream<any, any>(props$ as any, SanityStatus)

export default {
  name: 'sanityStatus',
  component: SanityStatusContainer
}
