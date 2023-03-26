interface ButtonProps {
  readonly onClick?: () => void;
  readonly disabled?: boolean;
}

export function Button(props: React.PropsWithChildren<ButtonProps>):JSX.Element {
  return <div>
    <button onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
    </div>
}
