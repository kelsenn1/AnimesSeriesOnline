import React from "react";
import Carousel from "react-elastic-carousel";
import vingadores from "./imagens/vingadores_avante.jpg";
import demon from "./imagens/demon_slayer_poster.jpg";
import Item from "./Item";
import './App.css';
import teste from "./teste.js";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from 'react';

function Home() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 }
      ];
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <>
        <div className='mybody'>
          <header className='cabecalho'>
            <div className='logo_cabecalho'>
              <a href="./teste">logo do site</a>
            </div>
            <div className='bts-cabecalho'>
              <a href='' className='bt-cabecalho'>Inicio</a>
              <a href='' className='bt-cabecalho'>categorias</a>
              <a href='' className='bt-cabecalho'>lançamentos</a>
              <a href='' className='bt-cabecalho'>séries</a>
              <a href='' className='bt-cabecalho'>filmes</a>
              <a href='' className='bt-cabecalho'>pedidos</a>
            </div>
            <div className="search">
              <input placeholder="BUSCAR" type="text" id="search1" onChange={event => {setSearchTerm(event.target.value)}} />
                {JSONDATA.filter((val)=> {
                  if (searchTerm == "") {
                    return false
                  } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                  }                      
                }).map((val, key) => {
                  return (
                    <div className='user' key={key}>
                      <a href={val.href}>{val.name}</a>
                    </div>
                  );
                })}
            </div>
          </header>
          <div className="slick">
            <div className="banner_gradient"><></></div>
            <div className="App">
              <Carousel breakPoints={breakPoints}>
                  <div className="banner_item">
                    <h1>titulo</h1>
                    <h3>sinopse sinopse sinopse sinopse sinopse sinopse sinopse sinopse sinopse sinopse sinopse sinopse sinopse sinopse sinopse </h3>
                    <img src={vingadores}/>
                  </div>
                  <Item>Two</Item>
              </Carousel>
            </div>
          </div>
          <div className="fileira">
            <h2>nome da categoria</h2>
            <div className="separador"> <></></div>
            <Carousel itemsToShow={6} pagination={false} showArrows={false}>
              <div><img src={demon}/></div>
              <Item>2</Item>
              <Item>3</Item>
              <Item>4</Item>
              <Item>5</Item>
              <Item>6</Item>
            </Carousel>
          </div>
          <div className="fileira">
            <h2>nome da categoria</h2>
            <div className="separador"> <></></div>
            <Carousel itemsToShow={6} pagination={false} showArrows={false}>
              <div><img src={demon}/></div>
              <Item>2</Item>
              <Item>3</Item>
              <Item>4</Item>
              <Item>5</Item>
              <Item>6</Item>
            </Carousel>
          </div>
        </div>
        </>
      );
}

export default Home;