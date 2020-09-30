import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import { Link } from 'react-router';

import AwesomeSlider from 'react-awesome-slider';
import Footer from './footer'

import { Cinemagraph } from 'react-cinemagraph';
import discoJpg from './HomeImages/loading.png';
import discoMp4 from './vid/Spring.mp4';
import discoMp4Summer from './vid/Summer.mp4';
import discoMp4Autumn from './vid/Autumn.mp4';
import discoMp4Winter from './vid/Winter.mp4';


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
  width: 70,
  maxHeight: 100,
  fallbackImage: discoJpg,
  fallbackImageAlt: 'Disco',
  mp4Source: discoMp4,
  webmSource: discoWebM,
  isBlackAndWhite: false,
  isSepia: false,
  isBlurred: false
};


const stateSummer = {
  height: 50,
  width: 70,
  maxHeight: 100,
  fallbackImage: discoJpg,
  fallbackImageAlt: 'Disco',
  mp4Source: discoMp4Summer,
  webmSource: discoWebM,
  isBlackAndWhite: false,
  isSepia: false,
  isBlurred: false
};


const stateAutumn = {
  height: 50,
  width: 70,
  maxHeight: 100,
  fallbackImage: discoJpg,
  fallbackImageAlt: 'Disco',
  mp4Source: discoMp4Autumn,
  webmSource: discoWebM,
  isBlackAndWhite: false,
  isSepia: false,
  isBlurred: false
};




const stateWinter = {
  height: 50,
  width: 70,
  maxHeight: 100,
  fallbackImage: discoJpg,
  fallbackImageAlt: 'Disco',
  mp4Source: discoMp4Winter,
  webmSource: discoWebM,
  isBlackAndWhite: false,
  isSepia: false,
  isBlurred: false
};

const IMAGES =
[
{
        src: "https://i.imgur.com/96tTQXf.jpg",
        thumbnail: "https://i.imgur.com/96tTQXf.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "FlowerBed", title: "FlowerBed"}],
        caption: "(Peter McGuinness - PeterMcGuinness.com)"
},

{
        src: "https://i.imgur.com/kpqAl0m.jpg",
        thumbnail: "https://i.imgur.com/kpqAl0m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "(Peter McGuinness - PeterMcGuinness.com)"
},


{
  src: "https://i.imgur.com/OP9luf2.jpg",
  thumbnail: "https://i.imgur.com/OP9luf2.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "(Peter McGuinness - PeterMcGuinness.com)"
},

{
  src: "https://i.imgur.com/2XuziEE.jpg",
  thumbnail: "https://i.imgur.com/2XuziEE.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "(Peter McGuinness - PeterMcGuinness.com)"
},


{
  src: "https://i.imgur.com/KqnFnDm.jpg",
  thumbnail: "https://i.imgur.com/KqnFnDm.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "(Peter McGuinness - PeterMcGuinness.com)"
},


]


const IMAGES_Summer =
[
{
        src: "https://i.imgur.com/Pmktrug.jpg",
        thumbnail: "https://i.imgur.com/Pmktrug.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://i.imgur.com/WGB42re.jpg",
        thumbnail: "https://i.imgur.com/WGB42re.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "(Peter McGuinness - PeterMcGuinness.com)"
},


{
  src: "https://i.imgur.com/Ao7ObDK.jpg",
  thumbnail: "https://i.imgur.com/Ao7ObDK.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "(Peter McGuinness - PeterMcGuinness.com)"
},

{
  src: "https://i.imgur.com/04u6hXz.jpg",
  thumbnail: "https://i.imgur.com/04u6hXz.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "(Peter McGuinness - PeterMcGuinness.com)"
},


{
  src: "https://i.imgur.com/yZR3V9D.png",
  thumbnail: "https://i.imgur.com/yZR3V9D.png",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "(Peter McGuinness - PeterMcGuinness.com)"
},


]



const IMAGES_Autumn =
[
{
        src: "https://i.imgur.com/CGBbMoD.jpg",
        thumbnail: "https://i.imgur.com/CGBbMoD.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "River", title: "River"}, {value: "People", title: "People"}],
        caption: "(Peter McGuinness - PeterMcGuinness.com)"

},
{
  src: "https://i.imgur.com/CGBbMoD.jpg",
  thumbnail: "https://i.imgur.com/CGBbMoD.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "(Peter McGuinness - PeterMcGuinness.com)"

},
{
        src: "https://i.imgur.com/9Iqyvst.jpg",
        thumbnail: "https://i.imgur.com/9Iqyvst.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "(Peter McGuinness - PeterMcGuinness.com)"

},


{
  src: "https://i.imgur.com/b68ujD2.jpg",
  thumbnail: "https://i.imgur.com/b68ujD2.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "(Peter McGuinness - PeterMcGuinness.com)"

},

{
  src: "https://i.imgur.com/6VgJeBk.jpg",
  thumbnail: "https://i.imgur.com/6VgJeBk.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "(Peter McGuinness - PeterMcGuinness.com)"

},


{
  src: "https://i.imgur.com/KaRa4Pd.jpg",
  thumbnail: "https://i.imgur.com/KaRa4Pd.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "(Peter McGuinness - PeterMcGuinness.com)"

},


]



const IMAGES_Winter =
[
{
        src: "https://i.imgur.com/oDNeSFh.jpg",
        thumbnail: "https://i.imgur.com/oDNeSFh.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Winter", title: "Winter"}],
        caption: "PeterMcGuinnessPhotography.com)"
},
{
  src: "https://i.imgur.com/YRVfQ3f.jpg",
  thumbnail: "https://i.imgur.com/YRVfQ3f.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "(Peter McGuinness - PeterMcGuinness.com)"

},
{
        src: "https://i.imgur.com/XvWCDVc.jpg",
        thumbnail: "https://i.imgur.com/XvWCDVc.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "(Peter McGuinness - PeterMcGuinness.com)"

},


{
  src: "https://i.imgur.com/s1VZn4T.jpg",
  thumbnail: "https://i.imgur.com/s1VZn4T.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "(Peter McGuinness - PeterMcGuinness.com)"

},




{
  src: "https://i.imgur.com/osfhp96.jpg",
  thumbnail: "https://i.imgur.com/osfhp96.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "(Peter McGuinness - PeterMcGuinness.com)"

},


]






function Apptwo() {
  return (
    <div className="centerAll">
<style>

  {'body { background-image: url("https://i.imgur.com/uo30g5G.png"); }'}</style>
  {/* <div>Number 2 nibbbbbbbbbbbbbbba</div> */}

  <h1 id ="header_floated">Spring</h1>
 <hr id = "lineUnder"></hr>
 





      <h2 className = "space-here"></h2>
      


      <Cinemagraph className = "centerAll"
          height={28}
          width = {50}
          justifyContent = {'right'}
          fallbackImage={state.fallbackImage}
          fallbackImageAlt={state.fallbackImageAlt}
          mp4Source={state.mp4Source}
          webmSource={state.webmSource}
          isBlackAndWhite={state.isBlackAndWhite}
          isSepia={state.isSepia}
          isBlurred={state.isBlurred}
        />



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




{/* SUMMMMMMMMMMMMMMER */}


<div id="containerSpace3"></div>



<h1 id ="header_floated">Summer</h1>
 <hr id = "lineUnder"></hr>
 

      <Cinemagraph className = "centerAll"
          height={28}
          justifyContent = {'right'}
          fallbackImage={stateSummer.fallbackImage}
          fallbackImageAlt={stateSummer.fallbackImageAlt}
          mp4Source={stateSummer.mp4Source}
          webmSource={stateSummer.webmSource}
          isBlackAndWhite={stateSummer.isBlackAndWhite}
          isSepia={stateSummer.isSepia}
          isBlurred={stateSummer.isBlurred}
        />

      <h2 className = "space-here"></h2>
      




        <h2 className = "space-here">


        ‎‎‎


        ‎‎‎

          
          

        </h2>

       
  
      
        <Gallery className = "centerAll8" images={IMAGES_Summer}  > 
  
        </Gallery>
        <h2 className = "space-here">


‎‎‎

</h2>
<div></div>
<div id="containerSpace3"></div>


{/* FALLLLLLLLLLLLLLLLLLLL */}


<div id="containerSpace3"></div>



<h1> ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</h1>

<h1 id ="header_floated">Autumn</h1>
 <hr id = "lineUnder"></hr>

 

      <Cinemagraph className = "centerAll"
          height={30}
          justifyContent = {'right'}
          fallbackImage={stateAutumn.fallbackImage}
          fallbackImageAlt={stateAutumn.fallbackImageAlt}
          mp4Source={stateAutumn.mp4Source}
          webmSource={stateAutumn.webmSource}
          isBlackAndWhite={stateAutumn.isBlackAndWhite}
          isSepia={stateAutumn.isSepia}
          isBlurred={stateAutumn.isBlurred}
        />

          




        <h2 className = "space-here">


        ‎‎‎


        ‎‎‎

          


        </h2>

       
  
      
        <Gallery className = "centerAll8" images={IMAGES_Autumn}  > 
  
        </Gallery> <h2 className = "space-here">


‎‎‎

</h2>
<div></div>
        <h2 className = "space-here">


‎‎‎

</h2>

<div></div>


{/* WINTER */}



<h1 id ="header_floated"> ‎‎‏‏‎  ‎‎‏‏‎ ‎‏‏‎  ‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‎‏‏‎  ‎‎‏‏‎ ‎‏‏‎  ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</h1>
<h1 id ="header_floated">‎Winter‎</h1>
 <hr id = "lineUnder"></hr>
 

      <Cinemagraph className = "centerAll"
          height={33}
          justifyContent = {'right'}
          fallbackImage={stateWinter.fallbackImage}
          fallbackImageAlt={stateWinter.fallbackImageAlt}
          mp4Source={stateWinter.mp4Source}
          webmSource={stateWinter.webmSource}
          isBlackAndWhite={stateWinter.isBlackAndWhite}
          isSepia={stateWinter.isSepia}
          isBlurred={stateWinter.isBlurred}
        />

      <h2 className = "space-here"></h2>
      




        <h2 className = "space-here">


        ‎‎‎


        ‎‎‎

          
          

        </h2>

       
  
      
        <Gallery className = "centerAll8" images={IMAGES_Winter}  > 
  
        </Gallery>
        <h2 className = "space-here">


‎‎‎

</h2>
<div></div>
<div id="containerSpace3"></div>




<div></div>
<div id="containerSpace3"></div>

‏‏‎ ‎
‏‏‎ ‎
‏‏‎ ‎
‏‏‎ ‎
‏‏‎ ‎
‏‏‎ ‎
‏‏‎ ‎
‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎
‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎
‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎
‏‏‎ ‎
‏‏‎ ‎
‏‏‎ ‎
‏‏‎ ‎
‏‏‎ ‎
‏‏‎ ‎
‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎
‏‏‎ ‎
‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ 
‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎
‏‏‎ ‎
‏‏‎ ‎
‏‏‎ ‎
‏‏‎ ‎

<div></div>
<div id="containerSpace3"></div>
    

        {/* <Feed className = "centerInst" username="jamespaulmoriarty" /> */}



        {/* <header className="App-header">

      </header> */}
      <div id="instagram"></div>
    
<Footer/>

    </div>
  );
}

export default Apptwo;
