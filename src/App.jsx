import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import axios from "axios";

export default function App() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [valueproduct, setValueproduct] = useState("");

  const onTextChangename = (e) => setName(e.target.value);
  const onTextChangecategory = (e) => setCategory(e.target.value);
  const onTextChangeamount = (e) => setAmount(e.target.value);
  const onTextChangevalue = (e) => setValueproduct(e.target.value);
  const handleSubmit = async () => {
    const form_response = {
      product_name: name,
      category,
      amount: amount,
      unit_value: valueproduct,
    };
    await axios
      .post("http://localhost:3001/item", form_response)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleReset = () => {
    setName("");
    setCode("");
    setCategory("");
    setAmount("");
    setValueproduct("");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div>
            <h1>TITULO HEROKU</h1>
          </div>
        </Grid>
        <Grid item xs={2}>
          <Stack p={10} direction="column" alignItems="center" spacing={2}>
            <Button style={{ width: "250px" }} variant="contained">
              <h3>REGISTRADORA</h3>
            </Button>
            <Button style={{ width: "250px" }} variant="contained">
              <h3>INVENTARIO</h3>
            </Button>
            <Button style={{ width: "250px" }} variant="contained">
              <h3>FACTURAS</h3>
            </Button>
            <Button style={{ width: "250px" }} variant="contained">
              <h3>REPORTES</h3>
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack p={5} spacing={2}>
            <h2>INGRESO A INVENTARIO</h2>
            <TextField
              variant="outlined"
              onChange={onTextChangename}
              value={name}
              label={"Nombre del Producto"}
            />
            <TextField
              value={category}
              label="Categoria"
              onChange={onTextChangecategory}
              select
            >
              <MenuItem value={"Comida rápida"}>Comida rápida</MenuItem>
              <MenuItem value={"Panadería"}>Panadería</MenuItem>
              <MenuItem value={"Carnes"}>Carnes</MenuItem>
              <MenuItem value={"Bebidas"}>Bebidas</MenuItem>
              <MenuItem value={"Granos"}>Granos</MenuItem>
              <MenuItem value={"Condimentos"}>Condimentos</MenuItem>
              <MenuItem value={"Verduras"}>Verduras</MenuItem>
            </TextField>
            <TextField
              variant="outlined"
              onChange={onTextChangeamount}
              value={amount}
              label={"Cantidad"}
              type="number"
            />
            <TextField
              variant="outlined"
              onChange={onTextChangevalue}
              value={valueproduct}
              label={"Valor Unitario"}
              type="number"
            />
            <Button size="large" variant="contained" onClick={handleSubmit}>
              GUARDAR
            </Button>
            <Button size="large" variant="contained" onClick={handleReset}>
              LIMPIAR
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <div></div>
        </Grid>
        <Grid item xs={12}>
          <div></div>
        </Grid>
      </Grid>
    </Box>
  );
}
