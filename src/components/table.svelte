<script>
  export let tableData;
  export let tableHeading;

  let w;

  let yes = w > 360;
</script>

<style>
  table,
  tbody,
  thead,
  th,
  tr,
  td {
    display: block;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  table {
    border: 1px solid black;
    border-collapse: collapse;
  }

  tr {
    border-bottom: 1px solid black;
  }

  .is-striped {
    background-color: "#999";
  }

  th,
  td {
    padding: 1rem;
  }

  td::before {
    white-space: nowrap;
    font-weight: bold;
  }

  td:nth-of-type(1)::before {
    content: "State Name: ";
  }

  td:nth-of-type(2)::before {
    content: "Cases: ";
  }

  td:nth-of-type(3)::before {
    content: "Deaths: ";
  }

  td:nth-of-type(4)::before {
    content: "Total Tested: ";
  }

  caption {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 1rem auto;
  }

  @media (min-width: 640px) {
    thead tr {
      position: static;
    }

    thead,
    tbody {
      display: table-row-group;
    }

    th,
    td {
      display: table-cell;
      text-align: left;
    }

    tr {
      display: table-row;
    }

    table {
      display: table;
    }

    td:nth-of-type(n)::before,
    td:nth-of-type(n)::after {
      content: "";
    }

    caption {
      display: table-caption;
    }
  }

  @media (min-width: 769px) {
    .section {
      padding: 4rem;
    }
  }
</style>

<div class="table-container" bind:clientWidth="{w}">
  <div class="section" aria-labelledby="usdata" role="region">
    <table class="table is-fullwidth is-striped is-hoverable" class:is-bordered="{yes}">
      <caption id="usdata">
        Covid-19: US States
      </caption>
      <thead>
        <tr>
          {#each tableHeading as td}
          <th scope="col" class="has-text-weight-bold">{td.text}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each tableData as data (data.state)}
        <tr>
          <td><a href="/{data.state.toUpperCase()}">{data.stateName}</a></td>
          <td>{data.cases.toLocaleString()}</td>
          <td>{data.deaths.toLocaleString()}</td>
          <td>{data.totalTested.toLocaleString()}</td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
