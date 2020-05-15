<script context="module">
  import { stateNamesObject } from "../data/state-names.js";
  import request from "../data/request.js";

  export async function preload(page) {
    const state = page.params["state"].toUpperCase();
    const stateName = stateNamesObject[state];

    if (stateName === undefined) {
      this.error(404, "State Not Found");
      return;
    }

    try {
      const stateStats = await request.stateStats(state);

      return { state, stateStats, stateName };
    } catch (err) {
      this.error(500, "There was an error loading the data. Please try again in 5 minutes");
    }
  }
</script>

<script>
  import CovidState from "../components/covid-stat.svelte";
  import CovidChart from "../components/covid-chart.svelte";
  import TableContainer from "../components/table-container.svelte";

  export let state;
  export let stateStats;
  export let stateName;
</script>

<svelte:head>
  <title>Covid 19 - {state}</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid 19 - {state}</h1>
    <h2>{stateName} State</h2>
  </div>
</div>

<CovidState { ...stateStats}></CovidState>
<CovidChart></CovidChart>
