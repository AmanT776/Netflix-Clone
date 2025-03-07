import React from 'react'

import './Home.css' 
import Navbar from '../../components/Navbar/Navbar'
import TitleCards from '../../components/TitleCards/TitleCards'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'

function Home(){
    return(
        <div className="home">
            <Navbar/>    
            <Hero/>
            <TitleCards title={"Now Playing"} category={"now_playing"}/>
            <TitleCards title={"Popular"} category={"popular"}/>
            <TitleCards title={"Top Rated"} category={"top_rated"}/>
            <TitleCards title={"Upcoming"} category={"upcoming"}/>
            <Footer/>
        </div>

         
    )
}

export default Home