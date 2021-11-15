import { Divider } from "@mui/material";
import React, {useState} from "react";
import { Chart } from "react-google-charts";
import NavBar from "../../Componentes/NavBar/NavBar";

function Dashboard() {
    const [options, setOptions] = useState({
        title: 'Categorias de Produtos',
        backgroundColor: "white",
        
      });
      
      const [data, setData] = useState([
        ['Produtos', 'Quantidade'],
        ['Prego', 20000],
        ['Porca', 15000],
        ['Parafuso', 12000],
      ]);
  
  return (
    <div>
      <NavBar />
      <div style={{textAlign: "center", marginTop:"80px", marginLeft: "200px"}}>
      <h1 >Dashboard</h1>
      <div style={{textAlign: "center", marginTop:"80px", marginLeft: "100px", display: "flex"}} >
          <Chart
            width={'400px'}
            height={'300px'}
            chartType="PieChart"
            data={data}
            options={options}
          />
        </div>
      </div>
      
    </div>
  );
}

export default Dashboard; 

