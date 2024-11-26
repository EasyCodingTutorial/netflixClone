import React from 'react'

import styles from './MainBg.module.css'


export const MainBg = () => {
    return (
        <>
            <div className={styles.MainBg}>

                <div className={styles.ParentImgTag}>
                    <img src="/assets/rootBg.jpg" alt="" />
                </div>

                <div className={styles.Content}>
                    <div>
                        <h6>Unlimited movies, TV shows and more.</h6>
                        <p>Starts At ₹149, Cancel Anytime.</p>
                    </div>
                </div>
            </div>

            {/* Input for Email */}
            <div className={styles.Subscribe}>
                <h5>Ready To Watch? Enter your Email To create or restart your membership. </h5>

                <div>
                    <input type="text" placeholder='Your Email' />
                    <button>Get Started</button>
                </div>
            </div>

        </>
    )
}
