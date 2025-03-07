import React from 'react'
import { Link } from 'react-router-dom'
import './hero.css'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
export default function Hero(){
    return(
        <div className="hero">
                <div className="hero_banner">
                    <img src={hero_banner} alt="movie collection" className="banner-img" />
                </div>
                <div className="hero-caption">
                    <img src={hero_title} alt="" className="caption-img" />
                    <p className="caption-txt">
                        Watch one of the greates heist movies
                    </p>
                    <div className="hero-btns">
                        {/* <Link to={`/Player/`}> */}
                             <button className='btn'>
                                <i class="play-btn fa-solid fa-play"></i>
                                Play
                             </button>
                        {/* </Link> */}
                        <button className="btn dark-btn">
                            <i class="info-icon fa-solid fa-circle-info"></i>
                            More Info
                        </button>
                    </div>
                </div>
        </div>
    )
}
