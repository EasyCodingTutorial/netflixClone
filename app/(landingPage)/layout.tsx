import React from 'react'

// For Components
import { LandingNavbar } from './layout/LandingNavbar/LandingNavbar'
import { Footer } from './layout/LandingFooter/Footer'

const LandingPageLayout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <>
            <LandingNavbar />
            {children}
            <Footer />
        </>
    )
}

export default LandingPageLayout