import React from 'react'

import styles from './MoreReasons.module.css'

// For Components
import { Content } from '@/app/Components/Content/Content'
import { ContentBox } from '../ContentBox/ContentBox'

// For Data
import { Reasons } from '@/Static/reason'

export const MoreReasons = () => {
    return (
        <>
            <Content
                Title='More Reason To Join'
            />

            <div className={styles.container}>

                {
                    Reasons.map((I) => (
                        <ContentBox
                            key={I.id}
                            h6Text={I.Reason}
                        />
                    ))
                }

            </div>

        </>
    )
}
