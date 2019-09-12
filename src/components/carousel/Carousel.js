import React from "react";
import { Carousel } from 'antd';

class Carouselism extends React.Component {

render(){
  return(
  
  <Carousel autoplay effect="fade">
    
    <div>
    <img
        alt="Book-Banner-1"
        src={'https://i.imgur.com/vXpI5xi.jpg?1'}
      />
    </div>
    <div>
    <img
        alt="Laptop-Banner-1"
        src={'https://i.imgur.com/4bBdJoj.jpg?1'}
      />
    </div>
    <div>
    <img
        alt="Mobile-Banner-1"
        src={'https://i.imgur.com/j2pbVOG.jpg?1'}
      />
    </div>
    <div>
    <img
        alt="Mobile-Banner-2"
        src={'https://i.imgur.com/DhsWtGb.jpg?1'}
      />
    </div>
    
  </Carousel>

);
  }
}

export default Carouselism;