import {withPropsStream} from 'react-props-stream'
import UserStatus from './UserStatus'
import {toPropsStream} from './props'

import {ContainerProps, Props} from './types'

const UserStatusContainer = withPropsStream<ContainerProps, Props>(toPropsStream as any, UserStatus)

export default {
  name: 'userStatus',
  component: UserStatusContainer
}
