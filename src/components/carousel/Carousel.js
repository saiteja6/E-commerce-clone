import React from "react";
import { Carousel } from 'antd';


const data = [
  {
    title: "Title 1",
    src: "https://i.imgur.com/vXpI5xi.jpg?1"
  },
  {
    title: "Title 2",
    src: "https://i.imgur.com/vXpI5xi.jpg?2"
  },
  {
    title: "Title 3",
    src: "https://i.imgur.com/vXpI5xi.jpg?3"
  },
  {
    title: "Title 4",
    src: "https://i.imgur.com/vXpI5xi.jpg?4"
  },
  {
    title: "Title 5",
    src: "https://i.imgur.com/vXpI5xi.jpg?5"
  },
  {
    title: "Title 6",
    src: "https://i.imgur.com/vXpI5xi.jpg?6"
  },
  {
    title: "Title 7",
    src: "https://i.imgur.com/vXpI5xi.jpg?7"
  },
  {
    title: "Title 8",
    src: "https://i.imgur.com/vXpI5xi.jpg?8"
  },
  {
    title: "Title 9",
    src: "https://i.imgur.com/vXpI5xi.jpg?9"
  },
  {
    title: "Title 9",
    src: "https://i.imgur.com/vXpI5xi.jpg?9"
  },
]

class Carouselism extends React.Component {

render(){
  return(
  
  <Carousel autoplay effect="fade">

  {
    data.map((item, index) => {
      return (<div>
    <img
        alt={item.title}
        src={item.src}
      />
    </div>)
    })
  } 
  </Carousel>

);
  }
}

export default Carouselism;