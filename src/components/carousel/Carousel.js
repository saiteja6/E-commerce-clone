import React from "react";
import { Carousel } from 'antd';

class Carouselism extends React.Component {

render(){
  return(
  
  <Carousel autoplay effect="fade">
    
    <div>
    <img
        alt="book1"
        src={'./Images/bookscarousel1.jpg'}
      />
    </div>
    <div>
    <img
        alt="book2"
        src={'./Images/bookscarousel2.jpg'}
      />
    </div>
    <div>
    <img
        alt="entrbook"
        src={'./Images/entrancebookscarousel.jpg'}
      />
    </div>
    <div>
    <img
        alt="mob1"
        src={'./Images/mobcarousel1.jpg'}
      />
    </div>
    
  </Carousel>

);
  }
}

export default Carouselism;