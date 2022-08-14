import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import moment from "moment";

export default function SingleCoin({ data }) {
  const formatNumber = (num) => {
    num = +num;
    return num.toFixed(2);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={data.image.large}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            maxHeight: 300,
            "& ul": { padding: 0 },
          }}
        >
          <ListItem>
            <ListItemText>
              Coin ID: <span>{data.id}</span>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Symbol: <span>{data.symbol}</span>
            </ListItemText>
          </ListItem>
          <ListItem>
            Current Price($):{" "}
            <span>{formatNumber(data.market_data.current_price.usd)}</span>
          </ListItem>
          <ListItem>
            <ListItemText>
              Market Capacity($):{" "}
              <span>{formatNumber(data.market_data.market_cap.usd)}</span>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Market Capacity Rank:{" "}
              <span>{data.market_data.market_cap_rank}</span>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Total Volume($):{" "}
              <span>{formatNumber(data.market_data.total_volume.usd)}</span>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Total Supply($):{" "}
              <span>{formatNumber(data.market_data.total_supply)}</span>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Circulating Supply($):{" "}
              <span>{formatNumber(data.market_data.circulating_supply)}</span>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Last Updated:{" "}
              <span>
                {moment(data.last_updated).format("MMMM Do YYYY, h:mm:ss a")}
              </span>
            </ListItemText>
          </ListItem>
          {data.block_time_in_minutes && (
            <ListItem>
              <ListItemText>
                Block Time in Minutes: <span>{data.block_time_in_minutes}</span>
              </ListItemText>
            </ListItem>
          )}
        </List>
      </CardContent>
    </Card>
  );
}
