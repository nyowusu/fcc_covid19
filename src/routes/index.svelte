<script context="module">
  import request from "../data/request.js";

  export async function preload(page) {
    try {
      const usStats = await request.usStats();

      const historic = await request.historicUS();

      return { usStats, historic };
    } catch (err) {
      return this.error(500, "There was an error loading the data. Please try again in 5 minutes");
    }
  }
</script>

<script>
  import CovidState from "../components/covid-stat.svelte";
  import CovidChart from "../components/covid-chart.svelte";
  import TableContainer from "../components/table-container.svelte";

  export let usStats;
  export let historic;
</script>

<svelte:head>
  <title>Covid 19 Tracker US</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid 19 - US</h1>
  </div>
</div>

<CovidState {...usStats}></CovidState>
<CovidChart></CovidChart>
<TableContainer></TableContainer>
