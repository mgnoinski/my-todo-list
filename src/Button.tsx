interface ButtonProps {
  readonly onClick?: () => void;
}

export function Button(props: React.PropsWithChildren<ButtonProps>):JSX.Element {
  return <div>
    <button onClick={props.onClick}>{props.children}</button>
    </div>
}
