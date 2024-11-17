import Carousel from 'react-bootstrap/Carousel';
import { cards2 } from '../data/Data';
import Title from './common/Title';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextGradient from './common/TextGradient';
import { useState, useEffect } from 'react';

function Card2() {
    const [index, setIndex] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleSelect = (selectedIndex) => setIndex(selectedIndex);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const itemsPerSlide = screenWidth < 640 ? 1 : screenWidth <= 768 ? 2 : 3;
    const groupedCards = [];
    for (let i = 0; i < cards2.length; i++) {
        groupedCards.push(cards2.slice(i, i + itemsPerSlide));
    }

    return (
        <div className='pt-3 md:pt-[60px] lg:pt-[120px] pb-5 md:pb-[50px] lg:pb-[130px] bg-[#f8f9fc]'>
            <div className='mt-5 pb-[30px] flex flex-col justify-center items-center text-center'>
                <TextGradient>Inner Pages</TextGradient>
                <p className='text-[rgba(29,29,36,.75)] text-[18px]'>
                    Choose one of the styles or customize your site to match your ideas.
                </p>
            </div>
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} controls={true} interval={null} fade={false}>
                {
                    groupedCards.map((group, i) => (
                        <Carousel.Item key={i}>
                            <div className="flex justify-center space-x-4 md:my-11 lg:px-0 sm:px-5 px-4">
                                {
                                    group.map(({ imgs, titles }, j) => (
                                        <div key={j} className="bg-white rounded shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all cursor-pointer duration-500">
                                            <img src={imgs} alt={titles} className="md:w-full rounded-t w-[310px]" />
                                            <div className="p-4">
                                                <Title>{titles}</Title>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
            <div className='flex justify-center items-center space-x-5 mt-5'>
                {
                    groupedCards.map((_, i) => (
                        <button
                            key={i}
                            className={`indicators ${i === index ? 'active' : ''}`}
                            onClick={() => setIndex(i)}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Card2;
