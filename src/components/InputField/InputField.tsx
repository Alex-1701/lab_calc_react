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
    <div className={styles.inputParam}>
      <div className={styles.paramName}>{inputName}</div>
      <input
        type="number"
        className={styles.inputField}
        onChange={handleInputChange}
        value={value || ""}
      />
    </div>
  )
}
