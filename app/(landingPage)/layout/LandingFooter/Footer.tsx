import React from 'react'

import styles from './Footer.module.css'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className={styles.Footer}>
            All Right Reserved <Link href={'https://www.netflix.com/'} target='_blank'>Netflix</Link>
        </footer>
    )
}
