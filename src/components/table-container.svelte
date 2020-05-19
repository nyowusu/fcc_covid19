<script>
  import TableFilter from "./table-filter.svelte";
  import Table from "./table.svelte";

  export let tableData;

  let sortOptions = [
    { value: 0, text: "State Name" },
    { value: 1, text: "Cases" },
    { value: 2, text: "Deaths" },
    { value: 3, text: "Total Tested" },
  ];
  let sortOption = 0;
  let filteredData = tableData;
  let sortedTableData = sortTableData(0);

  function setSortOption(e) {
    sortedTableData = sortTableData(e.detail.option);
  }

  function setFilterValue(e) {
    filteredData = filteredData.filter((data) => data.stateName.toLowerCase().includes(e.detail.value));
    sortedTableData = filteredData;
  }

  function sortTableData(sort) {
    let data;

    switch (sort) {
      case 1:
        data = filteredData.sort((a, b) => a.cases - b.cases);
        break;
      case 2:
        data = filteredData.sort((a, b) => a.deaths - b.deaths);
        break;
      case 3:
        data = filteredData.sort((a, b) => a.totalTested - b.totalTested);
        break;
      default:
        data = filteredData.sort((a, b) => (a.stateName > b.stateName ? 1 : -1));
    }

    return data;
  }
</script>

<TableFilter on:resort="{setSortOption}" on:filter="{setFilterValue}" {sortOptions}> </TableFilter>
<Table tableData="{sortedTableData}" tableHeading="{sortOptions}"></Table>
