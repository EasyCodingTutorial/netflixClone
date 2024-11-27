"use client"
import React, { useEffect, useState } from 'react'

import styles from './Box.module.css'

interface BoxProps {
    ImgUrl: string,
    MainImgUrl: string,
    MovieTitle: string,
    MovieGenre?: string,
    movieYear: string,
    MovieDescription: string
}

export const Box = (
    { ImgUrl, movieYear, MainImgUrl, MovieTitle, MovieGenre, MovieDescription }: BoxProps
) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)


    // Function To Open The Modal
    const openModal = () => setIsModalOpen(true);

    // Function To Close The Modal
    const closeModal = () => setIsModalOpen(false);


    return (
        <div className={styles.Box}>
            <img src={ImgUrl} className={styles.ParentImg} alt="" onClick={openModal} />

            {/* For Modal Popup */}
            {
                isModalOpen && (
                    <div className={styles.Modal} onClick={closeModal}>
                        <div className={styles.ModalContent} onClick={(e) => e.stopPropagation()}>

                            {/* For Now I Am Using The Static Img */}
                            <img src={MainImgUrl} alt={MovieTitle} />

                            <div className={styles.Contents}>
                                <h6>{MovieTitle}</h6>
                                <h5>{movieYear} {MovieGenre}</h5>
                                <p className={styles.Desc}>
                                    {MovieDescription}
                                </p>

                                <button>Get Started</button>
                                <p className={styles.CustomText}>
                                    Create or Restart your membership
                                </p>


                            </div>

                        </div>
                    </div>
                )
            }

        </div>
    )
}
