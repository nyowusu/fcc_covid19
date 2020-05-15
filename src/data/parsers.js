import format from "./format";
import moment from "moment";

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

function usStatsParser(data) {
  const [usStatsRw] = data;

  return parseRawStats(usStatsRw);
}

function stateStatsParser(state, data) {
  const selectedState = data.find((d) => d.state === state);

  return parseRawStats(selectedState);
}

export default {
  usStatsParser,
  stateStatsParser,
};
