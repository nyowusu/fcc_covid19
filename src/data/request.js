import axios from "axios";
import parsers from "./parsers";

async function request(url) {
  return await axios.get(url);
}

async function usStats() {
  const response = await request("https://covidtracking.com/api/v1/us/current.json");

  return parsers.usStatsParser(response.data);
}

async function stateStats(state) {
  const response = await request("https://covidtracking.com/api/v1/states/current.json");

  return parsers.stateStatsParser(state, response.data);
}

async function historicUS() {
  const response = await request("https://covidtracking.com/api/v1/us/daily.json");

  return parsers.historicUS(response.data);
}

async function historicState(state) {
  const response = await request("https://covidtracking.com/api/v1/states/daily.json");

  return parsers.historicState(state, response.data);
}

export default {
  usStats,
  stateStats,
  historicUS,
  historicState,
};
