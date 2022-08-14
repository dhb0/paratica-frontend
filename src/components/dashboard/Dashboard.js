import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SingleCoin from "../single-coin/SingleCoin";
import { fetchCoinsSuccess, fetchCoinsFail } from "../../actions";

const Dashboard = () => {
  const { coin, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const coinsToDisplay = auth.role === 'admin' ? coin.items : coin.items.slice(0,10)


  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins", {
      method: "get",
      headers: { "Content-Type": "application/json", authorization: `Bearer` },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchCoinsSuccess(data));
      })
      .catch((e) => {
        dispatch(fetchCoinsFail(e.message));
      });
  }, []);

  if (coin.loading) {
    return (
      <Box
        sx={{
          my: 40,
          display: "flex",
          width: "100%",
          heighth: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress size="5rem" />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ my: 10 }}>
      <Grid container alignItems="stretch" spacing={3}>
        {coinsToDisplay.map((coin, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} lg={4}>
              <SingleCoin data={coin} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Dashboard;
