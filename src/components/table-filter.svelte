<script>
  import { createEventDispatcher } from "svelte";

  // event dispatchers
  const sortEventDispatcher = createEventDispatcher();
  const filterEventDispatcher = createEventDispatcher();

  export let sortOptions;

  let filter = "";
  let selected;

  function changeSortOption() {
    sortEventDispatcher("resort", {
      option: selected,
    });
  }

  function inputChange(e) {
    filterEventDispatcher("filter", {
      value: e.target.value,
    });
  }
</script>

<div class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-12-mobile is-6-tablet is-6-desktop">
        <input bind:value="{filter}" type="text" class="input" placeholder="Filter States" on:input="{inputChange}" />
      </div>
      <div class="column is-12-mobile is-6-tablet is-6-desktop">
        <div class="columns">
          <label for="sorting" class="is-1 has-text-right-tablet has-text-left-mobile column is-12-mobile is-3-tablet"
            >Sort by:</label
          >

          <select
            name="sorting"
            id="sorting"
            bind:value="{selected}"
            class="select column is-12-mobile is-9-tablet"
            on:change="{changeSortOption}"
          >
            {#each sortOptions as opt}
            <option value="{opt.value}">{opt.text}</option>
            {/each}
          </select>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  input,
  select,
  label {
    font-size: medium;
  }

  input,
  select {
    font-size: medium;
    border-radius: 5px;
  }

  select {
    padding: 5px;
  }

  @media (min-width: 769px) {
    input,
    select,
    label {
      font-size: large;
    }
  }
</style>
