import React from 'react'

import styles from './Content.module.css'

interface Props {
    Title: string,
}

export const Content = (
    { Title }: Props
) => {
    return (
        <h6 className={styles.Title}>{Title}</h6>
    )
}
