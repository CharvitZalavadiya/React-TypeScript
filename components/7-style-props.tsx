type ContainerProps = {
    style: React.CSSProperties
}

const StyleProps = (props:ContainerProps) => {
  return (
    <div style={props.style}>
      Hello World ! With Style Props
    </div>
  )
}

export default StyleProps
