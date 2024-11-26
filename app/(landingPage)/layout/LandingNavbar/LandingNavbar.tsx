import React from 'react'

import styles from './LandingNavbar.module.css'
import Link from 'next/link'

export const LandingNavbar = () => {
    return (
        <nav className={styles.Navbar}>
            <Link href={"/"}>
                <img src="/assets/logo.png" alt="" />
            </Link>

            <Link href={'/Auth'} className={styles.Btn}>Sign In</Link>
        </nav>
    )
}
