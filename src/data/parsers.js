import format from "./format";
import moment from "moment";
import { stateNamesObject } from "../data/state-names.js";

function parseRawStats(rawStats) {
  return {
    cases: format.number(rawStats.positive),
    deaths: format.number(rawStats.death),
    recovered: format.number(rawStats.recovered),
    ventilator: format.number(rawStats.onVentilatorCurrently),
    hospitalized: format.number(rawStats.hospitalized),
    icu: format.number(rawStats.inIcuCurrently),
    tested: format.number(rawStats.totalTestResults),
    updated: moment(rawStats.lastModified).format("LLLL"),
  };
}

function parseChart(historicData, key, label, color) {
  const chartData = historicData.map((data) => {
    return {
      x: moment(data.date, "YYYYMMDD"),
      y: data[key] || 0,
    };
  });

  return {
    label,
    data: chartData,
    fill: false,
    borderColor: color,
  };
}

function usStatsParser(data) {
  const [usStatsRw] = data;

  return parseRawStats(usStatsRw);
}

function stateStatsParser(state, data) {
  const selectedState = data.find((d) => d.state === state);

  return parseRawStats(selectedState);
}

function historicUS(historicData) {
  return parseHistoric(historicData);
}

function historicState(state, historicData) {
  const historicStateData = historicData.filter((d) => d.state === state);

  return parseHistoric(historicStateData);
}

function parseHistoric(historicData) {
  return [
    {
      label: "Cases",
      key: "positive",
      color: "rgb(255,0,20)",
    },
    {
      label: "Recovered",
      key: "recovered",
      color: "rgb(0,100,2)",
    },
    {
      label: "Total Tested",
      key: "totalTestResults",
      color: "rgb(0,0,0)",
    },
    {
      label: "Hospitalized",
      key: "hospitalizedCurrently",
      color: "rgb(190, 90, 0)",
    },
    {
      label: "Deaths",
      key: "death",
      color: "rgb(255,99,132)",
    },
  ].reduce((acc, next) => {
    if (historicData.filter((d) => d[next.key]).length > 4) {
      acc.push(parseChart(historicData, next.key, next.label, next.color));
    }
    return acc;
  }, []);
}

function stateTable(stateData) {
  return stateData.reduce((acc, next) => {
    acc.push({
      state: next.state,
      cases: next.positive,
      deaths: next.death,
      totalTested: next.totalTestResults,
      stateName: stateNamesObject[next.state],
    });

    return acc;
  }, []);
}

export default {
  usStatsParser,
  stateStatsParser,
  historicUS,
  historicState,
  stateTable,
};
