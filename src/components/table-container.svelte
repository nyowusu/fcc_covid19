<script>
  import TableFilter from "./table-filter.svelte";
  import Table from "./table.svelte";

  export let tableData;

  let sortOptions = [
    { key: "names", text: "State Name" },
    { key: "cases", text: "Cases" },
    { key: "deaths", text: "Deaths" },
    { key: "totalTested", text: "Total Tested" },
  ];

  let filter = "";
  let sortBySelected = sortOptions[0].text;
  $: sortedTableData = sortTableData(tableData, filter, sortBySelected);

  function sortTableData(states, filter, sortBySelected) {
    const filteredData = states.filter((state) => {
      return filter === "" || state.stateName.toLowerCase().includes(filter.toLowerCase());
    });

    if (sortBySelected !== sortOptions[0].text) {
      filteredData.sort((a, b) => +a[sortBySelected] - +b[sortBySelected]);
    }

    return filteredData;
  }
</script>

<TableFilter bind:filter bind:sortBySelected {sortOptions}> </TableFilter>
<Table tableData="{sortedTableData}" tableHeading="{sortOptions}"></Table>
