export type ComponentPropsProfileProps = {
  name: string
}

export const ComponentPropsProfile = ({ name }: ComponentPropsProfileProps) => {
  return <div>Private Profile component. Name is {name}</div>
}