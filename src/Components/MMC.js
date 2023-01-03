import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CountUp from "react-countup";
import { useCountUp } from "react-countup";

const theme = createTheme();

export default function MMC() {
  const countUpRef = React.useRef(null);
  const [l, setL] = useState(0);
  const [lq, setLq] = useState(0);
  const [w, setW] = useState(0);
  const [wq, setWq] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const mue = data.get("mue");
    const lemda = data.get("lemda");
    console.log({
      servers: data.get("servers"),
      lemda: data.get("lemda"),
      mue: data.get("mue"),
    });
    setL(lemda / (mue - lemda));
    setLq((lemda * lemda) / (mue / (mue - lemda)));
    setW(1 / (mue - lemda));
    setWq(lemda / (mue * (mue - lemda)));
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container flexDirection="row" justifyContent="space-evenly">
            <Grid md={3}>
              <Box
                sx={{
                  borderRadius: 2,
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  padding: 3,
                  mb: 5,
                }}
              >
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  Number of Servers ( C )
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="servers"
                  label="Number of Servers"
                  name="servers"
                  type="number"
                />
                <Typography sx={{ color: "gray", fontSize: 10 }}>
                  Number of servers in parallel open to attend customers.
                </Typography>
              </Box>
            </Grid>
            <Grid md={3}>
              {" "}
              <Box
                sx={{
                  borderRadius: 2,
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  padding: 3,
                  mb: 5,
                }}
              >
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  Arrival Rate ( λ )
                </Typography>
                <Box mb={2}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="lemda"
                    label="λ"
                    type="number"
                    id="lemda"
                  />
                </Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Rate</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Rate"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>No Units</MenuItem>
                    <MenuItem value={20}>Customer / Day </MenuItem>
                    <MenuItem value={20}>Customer / Hour</MenuItem>
                    <MenuItem value={20}>Customer / Minute</MenuItem>
                    <MenuItem value={30}>Customer / Second</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid md={3}>
              {" "}
              <Box
                sx={{
                  borderRadius: 2,
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  padding: 3,
                  mb: 5,
                }}
              >
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  Service Rate ( μ )
                </Typography>
                <Box mb={2}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="mue"
                    label="μ"
                    type="number"
                    id="mue"
                  />
                </Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Rate</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Rate"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>No Units</MenuItem>
                    <MenuItem value={20}>Customer / Day </MenuItem>
                    <MenuItem value={20}>Customer / Hour</MenuItem>
                    <MenuItem value={20}>Customer / Minute</MenuItem>
                    <MenuItem value={30}>Customer / Second</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Calculate
          </Button>
        </Box>
        <Box
          sx={{
            borderRadius: 2,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            padding: 3,
            mb: 3,
          }}
        >
          <Grid conatiner flexDirection="column">
            <Typography
              sx={{ fontSize: 25, fontWeight: "bold", display: "inline-flex" }}
            >
              <CountUp
                start={0}
                end={l}
                duration={2}
                separator=" "
                decimals={5}
                decimal="."
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <Typography
                sx={{
                  ml: 2,
                  color: "gray",
                  fontSize: 25,
                  fontWeight: "normal",
                  display: "inline-flex",
                }}
              >
                Customers
              </Typography>
            </Typography>
            <Typography sx={{ fontSize: 25, fontWeight: "bold" }}>
              L{" "}
              <Typography
                sx={{
                  ml: 2,
                  color: "gray",
                  fontSize: 25,
                  fontWeight: "normal",
                  display: "inline-flex",
                }}
              >
                Average Customers in System
              </Typography>
            </Typography>

            <Typography sx={{ color: "gray" }}>
              Average number of customers in the system.
            </Typography>
          </Grid>
        </Box>
        <Box
          sx={{
            borderRadius: 2,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            padding: 3,
            mb: 3,
          }}
        >
          <Grid conatiner flexDirection="column">
            <Typography
              sx={{ fontSize: 25, fontWeight: "bold", display: "inline-flex" }}
            >
              <CountUp
                start={0}
                end={lq}
                duration={2}
                separator=" "
                decimals={5}
                decimal="."
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <Typography
                sx={{
                  ml: 2,
                  color: "gray",
                  fontSize: 25,
                  fontWeight: "normal",
                  display: "inline-flex",
                }}
              >
                Customers
              </Typography>
            </Typography>
            <Typography sx={{ fontSize: 25, fontWeight: "bold" }}>
              Lq{" "}
              <Typography
                sx={{
                  ml: 2,
                  color: "gray",
                  fontSize: 25,
                  fontWeight: "normal",
                  display: "inline-flex",
                }}
              >
                Average Customers in Queue
              </Typography>
            </Typography>

            <Typography sx={{ color: "gray" }}>
              Average number of customers (entities) in the queue. In other
              words the expected amount of customers waiting to be served.
            </Typography>
          </Grid>
        </Box>
        <Box
          sx={{
            borderRadius: 2,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            padding: 3,
            mb: 3,
          }}
        >
          <Grid conatiner flexDirection="column">
            <Typography
              sx={{ fontSize: 25, fontWeight: "bold", display: "inline-flex" }}
            >
               <CountUp
                start={0}
                end={w}
                duration={2}
                separator=" "
                decimals={5}
                decimal="."
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <Typography
                sx={{
                  ml: 2,
                  color: "gray",
                  fontSize: 25,
                  fontWeight: "normal",
                  display: "inline-flex",
                }}
              >
                No Units
              </Typography>
            </Typography>
            <Typography sx={{ fontSize: 25, fontWeight: "bold" }}>
              W{" "}
              <Typography
                sx={{
                  ml: 2,
                  color: "gray",
                  fontSize: 25,
                  fontWeight: "normal",
                  display: "inline-flex",
                }}
              >
                Average Time Spent in System
              </Typography>
            </Typography>

            <Typography sx={{ color: "gray" }}>
              Average time spent by a customer from arrival until fully served.
            </Typography>
          </Grid>
        </Box>
        <Box
          sx={{
            borderRadius: 2,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            padding: 3,
            mb: 3,
          }}
        >
          <Grid conatiner flexDirection="column">
            <Typography
              sx={{ fontSize: 25, fontWeight: "bold", display: "inline-flex" }}
            >
              <CountUp
                start={0}
                end={wq}
                duration={2}
                separator=" "
                decimals={5}
                decimal="."
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <Typography
                sx={{
                  ml: 2,
                  color: "gray",
                  fontSize: 25,
                  fontWeight: "normal",
                  display: "inline-flex",
                }}
              >
                No Units
              </Typography>
            </Typography>
            <Typography sx={{ fontSize: 25, fontWeight: "bold" }}>
              Wq{" "}
              <Typography
                sx={{
                  ml: 2,
                  color: "gray",
                  fontSize: 25,
                  fontWeight: "normal",
                  display: "inline-flex",
                }}
              >
                Average Time Waiting in Line
              </Typography>
            </Typography>

            <Typography sx={{ color: "gray" }}>
              Average time it takes a customer to start being served.
            </Typography>
          </Grid>
        </Box>
        <Box
          sx={{
            borderRadius: 2,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            padding: 3,
            mb: 3,
          }}
        >
          <Grid conatiner flexDirection="column">
            <Typography
              sx={{ fontSize: 25, fontWeight: "bold", display: "inline-flex" }}
            >
              0{" "}
              <Typography
                sx={{
                  ml: 2,
                  color: "gray",
                  fontSize: 25,
                  fontWeight: "normal",
                  display: "inline-flex",
                }}
              ></Typography>
            </Typography>
            <Typography sx={{ fontSize: 25, fontWeight: "bold" }}>
              ρ{" "}
              <Typography
                sx={{
                  ml: 2,
                  color: "gray",
                  fontSize: 25,
                  fontWeight: "normal",
                  display: "inline-flex",
                }}
              >
                Server Utilization
              </Typography>
            </Typography>

            <Typography sx={{ color: "gray" }}>
              Percentage of time a server is being utilized by a customer.{" "}
            </Typography>
          </Grid>
        </Box>
        <Box
          sx={{
            borderRadius: 2,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            padding: 3,
            mb: 3,
          }}
        >
          <Grid conatiner flexDirection="column">
            <Typography sx={{ fontSize: 25, fontWeight: "bold" }}>
              λ'{" "}
              <Typography
                sx={{
                  ml: 2,
                  color: "gray",
                  fontSize: 25,
                  fontWeight: "normal",
                  display: "inline-flex",
                }}
              >
                Lambda prime
              </Typography>
            </Typography>

            <Typography sx={{ color: "gray" }}>
              A value used in some calculations.
            </Typography>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
