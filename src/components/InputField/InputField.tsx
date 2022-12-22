import React from "react"

import styles from "./InputField.module.scss"

interface Props {
  inputName: string
  setValue: (num: number) => void
}

export function InputField({ inputName, setValue }: Props) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+event.target.value)
  }

  // useEffect(() => () => {setValue(0)})

  return (
    <div className={styles.input_param}>
      <div className={styles.param_name}>{inputName}</div>
      <input
        type="number"
        id="input_x"
        className={styles.input_field}
        onChange={handleInputChange}
      />
    </div>
  )
}
