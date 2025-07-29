<script lang="ts">
  let count = 0;

  function increment() {
    count += 1;
  }

  function decrement() {
    count -= 1;
  }
</script>

<div class="fixed top-5 left-5 bg-white p-4 rounded-lg shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Svelte Counter</h3>
  <div class="flex items-center gap-4">
    <button 
      on:click={decrement}
      class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
    >
      -
    </button>
    <span class="text-xl font-bold text-gray-900 dark:text-white">{count}</span>
    <button 
      on:click={increment}
      class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
    >
      +
    </button>
  </div>
  <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">This is a Svelte component!</p>
</div> 