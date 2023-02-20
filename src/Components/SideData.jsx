import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Cimage1 from '../Images/corousel_1.png'
import Cimage2 from '../Images/corousel_2.png'
import Cimage3 from '../Images/corousel_3.png'

const SideData = () => {
  return (
    <><br/>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={Cimage2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-danger'>Lorem ipsum dolor sit amet.</h3>
          <p className='text-danger'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, fugiat?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className="d-block w-100"
          src={Cimage1}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3 >Lorem ipsum dolor sit amet.</h3>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, fugiat?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={Cimage3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className='text-dark'>Lorem ipsum dolor sit amet.</h3>
        <p className='text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, fugiat?</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );

  
}

export default SideData



