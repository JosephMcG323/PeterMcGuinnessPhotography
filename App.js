import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Link } from "react-router-dom";

import AwesomeSlider from 'react-awesome-slider';
import Footer from './footer'

import { Cinemagraph } from 'react-cinemagraph';
import discoJpg from './HomeImages/loading.png';
import discoMp4 from './vid/videon.mp4';
import discoWebM from './vid/videow.webm';
import InstagramEmbed from 'react-instagram-embed';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Zoom from 'react-medium-image-zoom';

import 'react-medium-image-zoom/dist/styles.css';

import ImageZoom from 'react-medium-image-zoom';

import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

import greyBackground from './HomeImages/Landscape1.png';

import landscape1 from './HomeImages/Landscape1.png';
import landscape2 from './HomeImages/Landscape2.jpg';
import landscape3 from './HomeImages/Landscape3.jpg';
import landscape4 from './HomeImages/Landscape4.png';
import landscape5 from './HomeImages/landscape5.jpg';
import landscape6 from './HomeImages/landscape6.jpg';

import Feed from "react-instagram-authless-feed";

import 'react-awesome-slider/dist/styles.css';

const state = {
  height: 50,
  maxHeight: 100,
  fallbackImage: discoJpg,
  fallbackImageAlt: 'Disco',
  mp4Source: discoMp4,
  webmSource: discoWebM,
  isBlackAndWhite: false,
  isSepia: false,
  isBlurred: false
};

const IMAGES =
[
{
        src: "https://i.imgur.com/T3UpF3x.jpg",
        thumbnail: "https://i.imgur.com/T3UpF3x.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://i.imgur.com/8Ygf2os.jpg",
        thumbnail: "https://i.imgur.com/8Ygf2os.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},


{
  src: "https://i.imgur.com/fg30xdt.jpg",
  thumbnail: "https://i.imgur.com/fg30xdt.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212
},

{
  src: "https://i.imgur.com/mfkc2l0.jpg",
  thumbnail: "https://i.imgur.com/mfkc2l0.jpg.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212
},


{
  src: "https://i.imgur.com/fg30xdt.jpg",
  thumbnail: "https://i.imgur.com/fg30xdt.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212
},
{
  src: "https://i.imgur.com/jzGyzBs.jpg",
  thumbnail: "https://i.imgur.com/jzGyzBs.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212
},
{
  src: "https://i.imgur.com/UYIBSQL.jpg",
  thumbnail: "https://i.imgur.com/UYIBSQL.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212
},
{
  src: "https://i.imgur.com/e02wlPC.jpg",
  thumbnail: "https://i.imgur.com/e02wlPC.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212
},
{
  src: "https://i.imgur.com/t29YOZ0.jpg",
  thumbnail: "https://i.imgur.com/t29YOZ0.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212
}

]



function App() {




  return (
    <div className="centerAll">
<style>


  
  
  {'body { background-image: url("https://i.imgur.com/uo30g5G.png"); }'}</style>






{/* 
  <div>
            <p>
              This is the first page.
              <br />
              Click on the button below.
            </p>
            <Link to="/page2"><button>
              Go to Page 2 
            </button>
            </Link>
          </div> */}

      <Cinemagraph className = "centerAll"
          height={28}
          justifyContent = {'right'}
          fallbackImage={state.fallbackImage}
          fallbackImageAlt={state.fallbackImageAlt}
          mp4Source={state.mp4Source}
          webmSource={state.webmSource}
          isBlackAndWhite={state.isBlackAndWhite}
          isSepia={state.isSepia}
          isBlurred={state.isBlurred}
        />


      <h2 className = "space-here"></h2>
      
      <h1 id ="header_floated">Donegal</h1>
 <hr id = "lineUnder"></hr>
 
<div id ="floated"> 
The county is the most mountainous in Ulster consisting chiefly of 
two ranges of low mountains; the Derryveagh Mountains in the north and the Blue Stack Mountains in the south, with Errigal at 749 metres (2,457 ft) the highest peak. It has a deeply indented coastline forming natural sea loughs, of which both Lough Swilly and Lough Foyle are the most notable. The Slieve League cliffs are the sixth-highest sea cliffs in Europe,
 while Malin Head is the most northerly point on the island of Ireland.

</div>

<div id="containerSpaceless"></div>
<div id="containerSpaceless"></div>
<div id="containerSpaceless"></div>

      {/* <AwesomeSlider className = "centerAll", "aws-btn"></div> */}
      <AwesomeSlider organicArrows = {true}  >
          <div data-src={landscape1}/>
          <div data-src={landscape2}/>
          <div data-src={landscape3}/>
          <div data-src={landscape4}/>
          <div data-src={landscape5}/>
          <div data-src={landscape6}/>
    
        </AwesomeSlider>
      
     




        <div id="containerSpace"></div>
{/* 

<div id = "container"> */}



<div id ="floated">
Remarkably, on the high slopes of Slieve League there are remains of an early Christian monastic site,
 with chapel and beehive huts. There are also ancient stone remains 
that suggest that the mountain was a site of pilgrimage before the arrival 
of Christianity. At Carrigan Head, on the way to the main viewing area, you can 
see a Signal Tower built in the early years of the 19th century to watch for a possible
 French invasion. Close to the viewing area you can see stones, which marked out the word 
 “Éire” as a navigation aid for aircraft during World War II.


</div>

<div id="containerSpaceless"></div>
<div id="containerSpaceless"></div>

<div id="containerSpaceless"></div>


<div className = "centerzoomImg" >

<Zoom  className = "centerAll3b" overlayBgColorEnd = {'rgba(0, 0, 0, 0.9)'} >
  <picture className = "centerAll3b" >
    <source media="(max-width: 100px)" srcSet="/path/to/teAraiPoint.jpg" />
    <img className = "centerAll3" 
      alt="that wanaka tree"
      src="https://www.gavi.org/sites/default/files/investing/funding/ireland_vincent-guth-NUiQpGnj9rI-unsplash.jpg"
      // src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg"
      width="500px"
    />
  </picture>
  
</Zoom>


  
  
</div>







{/* <div className = "centerAll3">

<Zoom  >
  <picture   >
    <source width= "65%" media="(width: 2000px)" srcSet="/path/to/teAraiPoint.jpg" />
    <img className = "centerAll5"
       
      alt="that wanaka tree"
      src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg"
    />
  </picture>
  
</Zoom>

  
</div> */}
  
  <div id="containerSpaceless"></div>
  <div id="containerSpaceless"></div>

<div id ="floated">



</div>

<div id="containerSpaceless"></div>
<div id="containerSpaceless"></div>

{/* <div id ="floated_left"></div> */}





{/* 

overlayBgColorEnd = {'rgba(0, 0, 0, 0.9)'} */}
<div className = "centerzoomImg">


<Zoom  className = "centerAll3" overlayBgColorEnd = {'rgba(0, 0, 0, 0.9)'}>
  <picture className = "centerAll3b" >
    <source media="(max-width: 100px)" srcSet="/path/to/teAraiPoint.jpg" />
    <img className = "centerAll3" 
      alt="that wanaka tree"
      src="https://live.staticflickr.com/3056/2707494677_3464330214_b.jpg"
      width="500px"
    />
  </picture>
  
</Zoom>


  
  
</div>






{/* 
        <ZoomImage
          imageWidth={600}
          imageHeight={400}
          src="https://static1.squarespace.com/static/5b475b2c50a54f54f9b4e1dc/5b4a5c2d88251b376ea105c1/5b4ae06b70a6ad5e776f7bcb/1531635294876/DSCF2803.jpg?format=1000w"
        /> */}
    

        
        <p className = "space-here">


        ‎‎‎


        ‎‎‎

          
          
        </p>
        <h2 className = "space-here">


        ‎‎‎


        ‎‎‎

          
          

        </h2>

       
  
      
        <Gallery className = "centerAll8" images={IMAGES}  > 
  
        </Gallery>
        <h2 className = "space-here">


‎‎‎

</h2>
<div></div>
<div id="containerSpace3"></div>
  
‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ 
  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎
  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎
‎‎‎    <div>
<InstagramEmbed className = "centerAll8"

  url='https://instagr.am/p/CFReVsQlq_a/'
/>

</div>




    

        {/* <Feed className = "centerInst" username="jamespaulmoriarty" /> */}



        {/* <header className="App-header">

      </header> */}
      <div id="instagram1"></div>
    
<Footer/>

    </div>
  );
}

export default App;
