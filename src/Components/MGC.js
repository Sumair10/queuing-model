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

export default function MGC() {
  const countUpRef = React.useRef(null);
  const [l, setL] = useState(0);
  const [lq, setLq] = useState(0);
  const [w, setW] = useState(0);
  const [wq, setWq] = useState(0);
  const [p, setP] = useState(0);

  const [arrivalRate, setArrivalRate] = useState("");
  const [serviceRate, setServiceRate] = useState("");
  const [lemda, setLemda] = useState(0);
  const [mue, setMue] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("please enter");

  const handleSubmit = (event) => {
    // setP(0);
    // setL(0);
    // setLq(0);
    // setW(0);
    // setWq(0);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const ia = data.get("lemda");
    const minimum = data.get("minimum");
    const maximum = data.get("maximum");
    const servers = 2;

    if (
      data.get("lemda") === "" ||
      data.get("minimum") === "" ||
      data.get("maximum") === ""
    ) {
      alert("Please enter required values");
    }  else {
      setShowResult(true);
      function factorialize(num) {
        // If the number is less than 0, reject it.
        if (num < 0) return -1;
        // If the number is 0, its factorial is 1.
        else if (num == 0) return 1;
        // Otherwise, call the recursive procedure again
        else {
          return num * factorialize(num - 1);
        }
      }

      var lemda = 1 / ia;
      var miu = (minimum + maximum) / 2;
      var ro = lemda / miu;

      var varianceOfServiceTime = (maximum ** 2 - minimum ** 2) / 12;
      var varianceOfInterArrival = lemda;
      var CSquareA = varianceOfInterArrival / (1 / lemda ** 2);
      var CSquareS = varianceOfServiceTime / (1 / miu ** 2);
      var listInQueue =
        (ro ** 2 * (1 + CSquareS) * (CSquareA + ro ** 2 * CSquareS)) /
        (2 * (1 - ro) * (1 + ro ** 2) * CSquareS);
      var waitInQueue = listInQueue / lemda;
      var waitInSystem = waitInQueue + 1 / miu;
      var listInSystem = lemda * waitInSystem;
      var idelServerProb = (1 - ro) * 100;

      // setLq(listInQueue);
      setWq(waitInQueue);
      setW(waitInSystem);
      setL(listInSystem);
      setP(idelServerProb)
    }
  };

  const handleArrivalChange = (event) => {
    setArrivalRate(event.target.value);
    if (event.target.value === "No units") {
      setLemda(0);
    } else if (event.target.value === "Day") {
      if (arrivalRate === "Hour") {
        setLemda(lemda * 24);
      } else if (arrivalRate === "Minute") {
        setLemda(lemda * 24 * 60);
      } else if (arrivalRate === "Second") {
        setLemda(lemda * 24 * 60 * 60);
      }
    } else if (event.target.value === "Hour") {
      if (arrivalRate === "Day") {
        setLemda(lemda / 24);
      } else if (arrivalRate === "Minute") {
        setLemda(lemda * 60);
      } else if (arrivalRate === "Second") {
        setLemda(lemda * 60 * 60);
      }
    } else if (event.target.value === "Minute") {
      if (arrivalRate === "Day") {
        setLemda(lemda / (24 * 60));
      } else if (arrivalRate === "Hour") {
        setLemda(lemda / 60);
      } else if (arrivalRate === "Second") {
        setLemda(lemda * 60);
      }
    } else if (event.target.value === "Second") {
      if (arrivalRate === "Day") {
        setLemda(lemda / (24 * 60 * 60));
      } else if (arrivalRate === "Hour") {
        setLemda(lemda / (60 * 60));
      } else if (arrivalRate === "Minute") {
        setLemda(lemda / 60);
      }
    }
  };

  const handleServiceChange = (event) => {
    setServiceRate(event.target.value);
    if (event.target.value === "No units") {
      setMue(0);
    } else if (event.target.value === "Day") {
      if (serviceRate === "Hour") {
        setMue(mue * 24);
      } else if (serviceRate === "Minute") {
        setMue(mue * 24 * 60);
      } else if (serviceRate === "Second") {
        setMue(mue * 24 * 60 * 60);
      }
    } else if (event.target.value === "Hour") {
      if (serviceRate === "Day") {
        setMue(mue / 24);
      } else if (serviceRate === "Minute") {
        setMue(mue * 60);
      } else if (serviceRate === "Second") {
        setMue(mue * 60 * 60);
      }
    } else if (event.target.value === "Minute") {
      if (serviceRate === "Day") {
        setMue(mue / (24 * 60));
      } else if (serviceRate === "Hour") {
        setMue(mue / 60);
      } else if (serviceRate === "Second") {
        setMue(mue * 60);
      }
    } else if (event.target.value === "Second") {
      if (serviceRate === "Day") {
        setMue(mue / (24 * 60 * 60));
      } else if (serviceRate === "Hour") {
        setMue(mue / (60 * 60));
      } else if (serviceRate === "Minute") {
        setMue(mue / 60);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container flexDirection="row" justifyContent="space-evenly">
            {/* <Grid md={1}></Grid>

            <Grid md={10}>
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
                  // label="Number of Servers"
                  name="servers"
                  type="number"
                  value={2}
                  disabled
                />
                <Typography sx={{ color: "gray", fontSize: 10 }}>
                  Number of servers in parallel open to attend customers.
                </Typography>
              </Box>
            </Grid>
            <Grid md={1}></Grid> */}
            <Grid md={1}></Grid>

            {/* <Grid md={4}>
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
                    value={lemda}
                    onChange={(e) => setLemda(e.target.value)}
                  />
                </Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Rate</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={arrivalRate}
                    label="Rate"
                    onChange={handleArrivalChange}
                  >
                    <MenuItem value={"No units"}>No Units</MenuItem>
                    <MenuItem value={"Day"}>Customer / Day </MenuItem>
                    <MenuItem value={"Hour"}>Customer / Hour</MenuItem>
                    <MenuItem value={"Minute"}>Customer / Minute</MenuItem>
                    <MenuItem value={"Second"}>Customer / Second</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid> */}

            <Grid md={10}>
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
                  Mean of Inter Arrival (having exponential distribution)
                </Typography>
                <Box mb={2}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="lemda"
                    label="λ"
                    type="number"
                    id="lemda"
                    value={lemda}
                    onChange={(e) => setLemda(e.target.value)}
                  />
                </Box>
                {/* <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Rate</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={arrivalRate}
                    label="Rate"
                    onChange={handleArrivalChange}
                  >
                    <MenuItem value={"No units"}>No Units</MenuItem>
                    <MenuItem value={"Day"}>Customer / Day </MenuItem>
                    <MenuItem value={"Hour"}>Customer / Hour</MenuItem>
                    <MenuItem value={"Minute"}>Customer / Minute</MenuItem>
                    <MenuItem value={"Second"}>Customer / Second</MenuItem>
                  </Select>
                </FormControl> */}
              </Box>
            </Grid>

            <Grid md={1}></Grid>

            {/* <Grid md={4}>
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
                    value={mue}
                    onChange={(e) => setMue(e.target.value)}
                  />
                </Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Rate</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={serviceRate}
                    label="Rate"
                    onChange={handleServiceChange}
                  >
                    <MenuItem value={"No units"}>No Units</MenuItem>
                    <MenuItem value={"Day"}>Customer / Day </MenuItem>
                    <MenuItem value={"Hour"}>Customer / Hour</MenuItem>
                    <MenuItem value={"Minute"}>Customer / Minute</MenuItem>
                    <MenuItem value={"Second"}>Customer / Second</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid> */}
            {/* <Grid md={1}></Grid> */}
            <Grid md={1}></Grid>

            {/* <Grid md={2}></Grid> */}

            <Grid md={4}>
              <Box
                sx={{
                  borderRadius: 2,
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  padding: 3,
                  mb: 5,
                }}
              >
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  Mean of service time having uniform distibution ( Minimum )
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="minimum"
                  label="Enter minimum value"
                  name="minimum"
                  type="number"
                />
                {/* <Typography sx={{ color: "gray", fontSize: 10 }}>
                  Number of servers in parallel open to attend customers.
                </Typography> */}
              </Box>
            </Grid>
            <Grid md={2}></Grid>

            <Grid md={4}>
              <Box
                sx={{
                  borderRadius: 2,
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  padding: 3,
                  mb: 5,
                }}
              >
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  Mean of service time having uniform distibution ( Maximum )
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="maximum"
                  label="Enter maximum value"
                  name="maximum"
                  type="number"
                />
                {/* <Typography sx={{ color: "gray", fontSize: 10 }}>
                  Number of servers in parallel open to attend customers.
                </Typography> */}
              </Box>
            </Grid>

            <Grid md={1}></Grid>
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

        {showResult ? (
          <>
            <Typography
              sx={{
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              Result
            </Typography>

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
                  sx={{
                    fontSize: 25,
                    fontWeight: "bold",
                    display: "inline-flex",
                    color: "purple",
                  }}
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
                <Typography
                  sx={{ fontSize: 25, fontWeight: "bold", color: "purple" }}
                >
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
                  sx={{
                    fontSize: 25,
                    fontWeight: "bold",
                    display: "inline-flex",
                    color: "skyblue",
                  }}
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
                <Typography
                  sx={{ fontSize: 25, fontWeight: "bold", color: "skyblue" }}
                >
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
                  sx={{
                    fontSize: 25,
                    fontWeight: "bold",
                    display: "inline-flex",
                    color: "green",
                  }}
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
                    {arrivalRate}
                  </Typography>
                </Typography>
                <Typography
                  sx={{ fontSize: 25, fontWeight: "bold", color: "green" }}
                >
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
                  Average time spent by a customer from arrival until fully
                  served.
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
                  sx={{
                    fontSize: 25,
                    fontWeight: "bold",
                    display: "inline-flex",
                    color: "red",
                  }}
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
                    {serviceRate}
                  </Typography>
                </Typography>
                <Typography
                  sx={{ fontSize: 25, fontWeight: "bold", color: "red" }}
                >
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
                  sx={{
                    fontSize: 25,
                    fontWeight: "bold",
                    display: "inline-flex",
                    color: "orange",
                  }}
                >
                  <CountUp
                    start={0}
                    end={p}
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
                  ></Typography>
                </Typography>
                <Typography
                  sx={{ fontSize: 25, fontWeight: "bold", color: "orange" }}
                >
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
          </>
        ) : null}
      </Container>
    </ThemeProvider>
  );
}
