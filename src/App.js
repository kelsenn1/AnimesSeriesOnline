import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import vingadores from "./imagens/vingadores_avante.jpg";
import demon from "./imagens/demon_slayer_poster.jpg";
import Item from "./Item";
import './App.css';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
];

function App() {
  return (
    <>

    <div className='mybody'>
      <header className='cabecalho'>
        <div className='logo_cabecalho'>
          <h1>logo do site</h1>
        </div>
        <div className='bts-cabecalho'>
          <a href='' className='bt-cabecalho'>Inicio</a>
          <a href='' className='bt-cabecalho'>categorias</a>
          <a href='' className='bt-cabecalho'>lançamentos</a>
        </div>
      </header>
      <div className="slick-gradient">
        <h1></h1>
      </div>
      <div className="slick">
        <div className="App">
          <Carousel breakPoints={breakPoints}>
              <img src={vingadores}/>
              <Item>Two</Item>
            </Carousel>
          </div>
      </div>
      <div className="fileira1">
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
