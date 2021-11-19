import { Container, Typography, Box } from "@material-ui/core";
import React from "react";
import NavBar from "../../Componentes/NavBar/NavBar";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import Gabi from "../../assets/avatar/Gabriela.png";
import Brena from "../../assets/avatar/Brena.png";
import Gabriel from "../../assets/avatar/Gabriel.png";
import Brenno from "../../assets/avatar/Brenno.png";
import Vinicius from "../../assets/avatar/Vinicius.png";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function Fornecedores() {
  return (
    <div>
      <NavBar />
      <div
        style={{ textAlign: "center", marginTop: "80px", marginLeft: "200px" }}
      >
        <h1>Fornecedores</h1>

        <Container
          maxWidth="sm"
          style={{ backgroundColor: "white", width: "30%", marginLeft: "10%" }}
        >
          <h2>Fornecedores Cadastrados</h2>
          <List sx={{ maxWidth: 360, bgcolor: "background.paper" }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={Brenno} />
              </ListItemAvatar>
              <ListItemText
                primary="Brenno Luan"
                secondary={
                  <React.Fragment>
                    <Typography>Categoria: Industrial</Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={Brena} />
              </ListItemAvatar>
              <ListItemText
                primary="Brena Monteiro"
                secondary={
                  <React.Fragment>
                    <Typography>Categoria: Industrial</Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={Gabi} />
              </ListItemAvatar>
              <ListItemText
                primary="Gabriela Muniz"
                secondary={
                  <React.Fragment>
                    <Typography>Categoria: Industrial</Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={Gabriel} />
              </ListItemAvatar>
              <ListItemText
                primary="Gabriel Victor"
                secondary={
                  <React.Fragment>
                    <Typography>Categoria: Industrial</Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={Vinicius} />
              </ListItemAvatar>
              <ListItemText
                primary="Vinicius Muliterno"
                secondary={
                  <React.Fragment>
                    <Typography>Categoria: Industrial</Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Container>
      </div>
    </div>
  );
}

export default Fornecedores;
