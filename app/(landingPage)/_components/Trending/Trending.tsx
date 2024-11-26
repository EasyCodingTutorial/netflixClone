import React from 'react'

import styles from './Trending.module.css'


// For Static Data
import { TrendingOnNetflix } from '@/Static/trending'

// For Components
import { Content } from '@/app/Components/Content/Content'
import { Box } from '@/app/Components/Box/Box'

export const Trending = () => {
    return (
        <>
            <Content
                Title={"Trending Now"}
            />

            <div className={styles.Trending}>
                {
                    TrendingOnNetflix.map((I) => (
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
