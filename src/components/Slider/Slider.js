import React, { useEffect, useState } from 'react'
import Slide from '../Slide/Slide';
import './Slider.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const Slider = ({ Add, cart}) => {

    const [slides, setSlides] = useState([]);

    const [imgIndex, setImgIndex] = useState(0);

    const prevImg = () => {
        setImgIndex(imgIndex - 5);
    }

    const nextImg = () => {
        setImgIndex(imgIndex + 5);
    }


    useEffect(() => {
        const fetchSlides = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos')
            const data = await res.json();
            setSlides(data.slice(0,50));
        }
        fetchSlides();
    }, []);

    return (
        <>
            <h1 className='title'>Products</h1>
            <div className='slider'>
                <button onClick={prevImg} className={imgIndex === 0 ?  'prevButton isHidden' : 'prevButton'}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </button>
                {slides.slice(imgIndex, imgIndex + 5).map(slide => 
                    <Slide url={slide.url} title={slide.title} Add={Add} id={slide.id} cart={cart}/>  
                )}
                <button onClick={nextImg} className={imgIndex < 44 ? 'nextButton' : 'nextButton isHidden'}>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </button>
            </div>
        </>
    )
}

export default Slider
