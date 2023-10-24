import { ComponentPropsLogin } from './18-component-props-login'
import { ComponentPropsProfileProps } from './18-component-props-profile'

type PrivateProps = {
  isLoggedIn: boolean
  Component: React.ComponentType<ComponentPropsProfileProps>
}

export const ComponentPropsPrivate = ({ isLoggedIn, Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name='CZ' />
  } else {
    return <ComponentPropsLogin />
  }
}