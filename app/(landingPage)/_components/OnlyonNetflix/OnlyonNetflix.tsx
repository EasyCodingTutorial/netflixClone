import React from 'react'

import styles from './OnlyonNetflix.module.css'


// For Components
import { Content } from '@/app/Components/Content/Content'
import { Box } from '@/app/Components/Box/Box'

// For Data
import { OnlyOnNetflixData } from '@/Static/OnlyOnNetflixData'


export const OnlyonNetflix = () => {
    return (
        <>
            <Content
                Title={"Only on Netflix"}
            />

            <div className={styles.Trending}>
                {
                    OnlyOnNetflixData.map((I) => (
                        <Box
                            key={I.id}
                            ImgUrl={I.image}
                            MovieDescription={I.description}
                            MovieGenre={I.genre.join("・")}
                            MainImgUrl={I.mainImage}
                            movieYear={I.release_year}
                            MovieTitle={I.title}
                        />
                    ))
                }
            </div>

        </>
    )
}
