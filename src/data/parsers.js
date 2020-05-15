import format from "./format";
import moment from "moment";

function requestedData(data) {
  const [usStatsRw] = data;

  return {
    cases: format.number(usStatsRw.positive),
    deaths: format.number(usStatsRw.death),
    recovered: format.number(usStatsRw.recovered),
    ventilator: format.number(usStatsRw.onVentilatorCurrently),
    hospitalized: format.number(usStatsRw.hospitalized),
    icu: format.number(usStatsRw.inIcuCurrently),
    tested: format.number(usStatsRw.totalTestResults),
    updated: moment(usStatsRw.lastModified).format("LLLL"),
  };
}

export default {
  requestedData,
};
