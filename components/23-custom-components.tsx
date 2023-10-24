import React from 'react'
import { Greet } from './3-typing-props-greet'

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>
}