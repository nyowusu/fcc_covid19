<script>
  export let tableData;
  export let tableHeading;
</script>

<div class="table-container">
  <table class="table is-striped is-bordered">
    <thead>
      <tr>
        {#each tableHeading as td}
        <td class="has-text-weight-bold">{td.text}</td>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each tableData as data}
      <tr>
        <td>{data.stateName}</td>
        <td>{data.cases.toLocaleString()}</td>
        <td>{data.deaths.toLocaleString()}</td>
        <td>{data.totalTested.toLocaleString()}</td>
      </tr>
      {/each}
    </tbody>
  </table>
</div>
