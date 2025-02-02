import { HTMLInputTypeAttribute } from "react";

export const InputTypeSelector = ({
  text,
  value,
  onChecked,
  checked,
  name,
  type,
  styles
}: {
  text: string,
  value: string | boolean,
  onChecked: (ch: any) => void
  checked: boolean
  name: string
  type: HTMLInputTypeAttribute
  styles: string
}) => {
  return (
    <div className="form-control">
      <label className="flex flex-row gap-3 label cursor-pointer">
        <span className="label-text">
          {text}
        </span>
        <input
          type={type}
          name={name}
          className={styles}
          onChange={type === "radio" ? (change) => onChecked(value): (change) => onChecked(change.target.checked)}
          checked={checked}
        />
      </label>
    </div>
  )
}