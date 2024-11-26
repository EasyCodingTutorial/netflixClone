import React from 'react'

import styles from './Faq.module.css'

// For Components
import { Content } from '@/app/Components/Content/Content'
import { FaqBox } from './FaqBox'
import { FaqData } from '@/Static/faqQuestion'

// For Static Data


export const Faq = () => {
    return (
        <>
            <Content
                Title='Frequently Asked Questions'
            />

            <div className={styles.container}>

                {
                    FaqData.map((I) => (
                        <FaqBox
                            Question={I.Question}
                            Answer={I.Answer}
                            key={I.id}
                        />
                    ))
                }

            </div>

        </>
    )
}
