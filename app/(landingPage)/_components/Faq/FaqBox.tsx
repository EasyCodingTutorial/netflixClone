"use client"
import React, { useState } from 'react'

import styles from './Faq.module.css'

interface FaqProps {
    Question: string,
    Answer: string,
}

export const FaqBox = (
    {
        Question, Answer
    }: FaqProps
) => {
    const [isOpen, setIsOpen] = useState(false)
    // Toggle Fun To Show/Hide The Answer
    const toggleAns = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className={styles.Box}>
            <div onClick={toggleAns}>
                <h6>{Question}</h6>
                <h5>
                    {
                        isOpen ? '➖' : '➕'
                    }
                </h5>
            </div>
            {
                isOpen && (
                    <p>
                        {Answer}
                    </p>
                )
            }
        </div>
    )
}
