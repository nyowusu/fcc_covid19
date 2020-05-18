<script>
  import { onMount, onDestroy } from "svelte";
  import Chart from "chart.js";

  export let historic;
  export let title;

  let hideChart = false;
  let chartElement;
  let chart;

  function createChart() {
    chart = new Chart(chartElement.getContext("2d"), {
      type: "line",
      data: { datasets: historic },
      options: {
        responsive: true,
        tooltips: {
          callbacks: {
            label: function (toolTipItem, data) {
              let label = data.datasets[toolTipItem.datasetIndex].label || "";

              return `${label}: ${toolTipItem.yLabel.toLocaleString()}`;
            },
          },
        },
        title: {
          display: true,
          text: title,
        },
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                parser: "M/D/YY",
                tooltipFormat: "ll",
              },
              scaleLabel: {
                display: true,
                labelString: "Date",
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
              },
              ticks: {
                beginAtZero: true,
                userCallback: function (value, index, values) {
                  return value.toLocaleString();
                },
              },
            },
          ],
        },
      },
    });
  }

  onMount(() => {
    if (historic && document.body.clientWidth > 680) {
      createChart();
      return;
    }

    hideChart = true;
  });

  onDestroy(() => {
    if (chart) {
      chart.destroy();
    }
  });
</script>

{#if !hideChart}
<div class="container">
  <canvas bind:this="{chartElement}"></canvas>
</div>
{/if}
