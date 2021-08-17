import React from 'react'
import Banner from '../components/Banner/Banner'
import Header from '../components/Header/Header'
import Portfolio from '../components/Portfolio/Portfolio'
import Whatwedo from '../components/Whatwedo/Whatwedo'

const Home = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <Whatwedo/>
            <Portfolio/>
        </>
    )
}

export default Home
