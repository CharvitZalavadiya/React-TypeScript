type InputProps = React.ComponentProps<'input'>

export const WrappingInput = (props: InputProps) => {
  return <input {...props} />
}