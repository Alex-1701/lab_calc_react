import React from "react"

import styles from "./InputField.module.scss"

interface Props {
  inputName: string
  setValue: (num: number) => void
  value: number | null
}

export function InputField({ inputName, setValue, value }: Props) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+event.target.value)
  }

  return (
    <div className={styles['input-param']}>
      <div className={styles['param-name']}>{inputName}</div>
      <input
        type="number"
        className={styles['input-field']}
        onChange={handleInputChange}
        value={value || ""}
      />
    </div>
  )
}
