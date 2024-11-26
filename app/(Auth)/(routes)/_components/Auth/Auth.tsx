"use client"
import React, { useState } from 'react'

import styles from './Auth.module.css'

// For Components
import { InputBox } from '../InputBox/InputBox'
import Link from 'next/link'

export const Auth = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [varient, setVarient] = useState<"Login" | "Register">('Login')



    const toggleVarient = () => {
        setVarient(varient === 'Login' ? 'Register' : 'Login')
    }



    return (
        <>
            <Link href={'/'} className={styles.BackButton}>Back To Home</Link>
            <div className={styles.Auth}>
                <div className={styles.Row}>

                    <h6>
                        {varient === 'Login' ? 'Login Now' : 'Register Now'}
                    </h6>


                    {
                        varient === 'Register' && (
                            <InputBox
                                id='name'
                                label='Your Name'
                                type='text'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        )
                    }

                    <InputBox
                        id='email'
                        label='Email Address'
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <InputBox
                        id='password'
                        label='Your Password'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />

                    <button className={styles.Btn}>
                        {varient === 'Login' ? 'Login Now' : 'Register Now'}
                    </button>

                    <p className={styles.CustomMessage}>
                        {
                            varient === 'Login' ? " Don't have an account?" : "Already have an account?"
                        }
                        <span
                            onClick={toggleVarient}
                        >
                            {varient === 'Login' ? "Register Now" : "Login Now"}
                        </span>
                    </p>




                </div>
            </div>
        </>
    )
}
