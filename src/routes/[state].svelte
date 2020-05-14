<script context="module">
  export async function preload(page) {
    return { state: page.params['state'] };
  }
</script>

<script>
  import CovidState from "../components/covid-stat.svelte";
  import CovidChart from "../components/covid-chart.svelte";
  import TableContainer from "../components/table-container.svelte";

  export let state;
</script>

<h1>hello: {state}</h1>

<CovidState />
<CovidChart />
