<script context="module">
  import { stateNamesObject } from "../data/state-names.js";

  export async function preload(page) {
    const state = page.params["state"].toUpperCase();

    if (stateNamesObject[state] === undefined) {
      console.log("show get error");
      this.error(404, "State Not Found");
      return;
    }

    try {
      return { state: page.params["state"] };
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
</script>

<svelte:head>
  <title>Covid 19 - {state}</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid 19 - {state}</h1>
  </div>
</div>

<CovidState></CovidState>
<CovidChart></CovidChart>
