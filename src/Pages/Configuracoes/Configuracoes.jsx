import React from "react";
import NavBar from "../../Componentes/NavBar/NavBar";
import LogoOne from "../../assets/img/logoOneStop.png";
import Construcao from "../../assets/img/construcao.gif"


function Configuracoes() {
  
  return (
    <div>
      <NavBar />
      <div style={{textAlign: "center", marginTop:"80px", marginLeft: "200px"}}>
      <h1 >Configurações</h1>
      <div>
      <img src={LogoOne} style={{width:"200px", marginTop: "-30px"}}/>
      <h2 style={{ marginTop: "-30px"}}>Em Breve</h2>
      </div>
      <img src={Construcao} />
      </div>
      
    </div>
  );
}

export default Configuracoes; 