import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import BarChartIcon from "@material-ui/icons/BarChart";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToApp from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Logo from "../../assets/img/logoPretium.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import User from "../../assets/img/user.png";
import { Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#8BCBDE",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function NavBar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const history = useHistory();

  const routeChange = (e) => {
    e.preventDefault();

    let path = `/`;

    history.push(path);
  };
  
  const routeChangeDashboard = (e) => {
    e.preventDefault();

    let path = `/dashboard`;

    history.push(path);
  };

  const routeChangeCotacoes = (e) => {
    e.preventDefault();

    let path = `/cotacoes`;

    history.push(path);
  };

  const routeChangeFornecedores = (e) => {
    e.preventDefault();

    let path = `/fornecedores`;

    history.push(path);
  };


  const routeChangeRelatorios = (e) => {
    e.preventDefault();

    let path = `/relatorios`;

    history.push(path);
  };

  const routeChangeConfiguracoes = (e) => {
    e.preventDefault();

    let path = `/configuracoes`;

    history.push(path);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "#8BCBDE" }}>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyItems: "center",
          backgroundColor: "#8BCBDE",
        }}
        className={classes.toolbar}
      >
        <div
          style={{
            height: 25,
            width: 150,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${Logo})`,
            marginLeft: "30px",
          }}
        />
      </div>
      <Divider />
      <div>
        <img
          src={User}
          style={{ width: "150px", margin: "10px", marginLeft: "45px" }}
        />
      </div>
      <Divider />
      <List>
        <ListItem button onClick={routeChangeDashboard}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItem>
        <Divider />
        <ListItem button onClick={routeChangeCotacoes}>
          <ListItemIcon>
            <MonetizationOnIcon />
          </ListItemIcon>
          <ListItemText primary={"Minhas Cotações"} />
        </ListItem>
        <Divider />
        <ListItem button onClick={routeChangeFornecedores}>
          <ListItemIcon>
            <LocalShippingIcon />
          </ListItemIcon>
          <ListItemText primary={"Fornecedores"} />
        </ListItem>
        <Divider />
        <ListItem button onClick={routeChangeRelatorios}>
          <ListItemIcon>
            <InsertDriveFileIcon />
          </ListItemIcon>
          <ListItemText primary={"Relatórios"} />
        </ListItem>
        <Divider />
        <ListItem button onClick={routeChangeConfiguracoes}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Configurações"} />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        ali
        position="fixed"
        variant="outlined"
        className={classes.appBar}
        style={{ backgroundColor: "#F1F8FA" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
              borderRadius: "30px",
              height: "30px",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Pesquisar"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <div
            style={{
              display: "flex",
              flex: 1,
              alignContent: "center",
              textAlign: "end",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ marginRight: 10 }}>
              <Typography variant="h6" style={{ color: "black" }}>
                Exit
              </Typography>
            </div>

            <IconButton color="inherit" edge="start" onClick={routeChange}>
              <ExitToApp style={{ color: "black" }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

NavBar.propTypes = {

  window: PropTypes.func,
};

export default NavBar;
