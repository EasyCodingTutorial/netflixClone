import React from 'react'

import styles from './InputBox.module.css'

interface InputProps {
    id: string,
    type?: string,
    value: string,
    label: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = (
    {
        id, type, value, label, onChange
    }: InputProps
) => {
    return (
        <div className={styles.InputGroup}>
            <input type={type} className={styles.Input} value={value} id={id} placeholder=''
                onChange={onChange}
            />
            <label htmlFor={id} className={styles.Input_Label}>{label}</label>
        </div>
    )
}
