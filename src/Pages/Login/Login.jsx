import React from "react";
import Logo from "../../assets/img/logoPretium.png";
import Container from "@mui/material/Container";
import {
  TextField,
  Box,
  Button,
  FormControlLabel,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const [checked, setChecked] = React.useState(true);
  const [user, setUser] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState(null);

  const handleChangeCheck = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const routeChange = (e) => {
    e.preventDefault();

    let path = `dashboard`;
    var result = "";

    if (user === "oneStop" && values.password === "2021") {
      history.push(path);
    } else {
      setErrorMessage(result);
      console.log("usuario ou senha incorreta");
    }
  };
  return (
    <div style={{ backgroundColor: "#EDF9FF", height: "100vh" }}>
      <Container
        maxWidth="sm"
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Box style={{ marginTop: "100px" }}>
          <img
            src={Logo}
            style={{
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          />
          <form>
            <h2 style={{ textAlign: "center", color: "#21AAD9" }}>
              Fazer Login
            </h2>
            <TextField
              value={user}
              onChange={(event) => {
                setUser(event.target.value);
              }}
              id="usuario"
              label="Usuário"
              variant="outlined"
              fullWidth
            />

            <FormControl
              style={{ marginTop: "10px" }}
              fullWidth
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Senha
              </InputLabel>
              <OutlinedInput
                id="senha"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Senha"
              />
            </FormControl>
            {errorMessage != null && (
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "10px"
                }}
              >
                <Typography
                  style={{
                    fontSize: 15,
                    color: "red",
                  }}
                >
                  Usuário ou senha incorretos
                </Typography>
              </div>
            )}
            <FormControlLabel
              style={{
                display: "block",
                marginLeft: "130px",
                marginTop: "15px",
              }}
              label="Lembrar minha senha"
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChangeCheck}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
            />

            <Button
              onClick={routeChange}
              style={{
                backgroundColor: "#99D3DF",
                color: "black",
                marginTop: "10px",
                width: "20%",
                borderRadius: "20px",
                display: "block",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
