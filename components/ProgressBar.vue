<template>
  <div>
    <b-progress
      :value="value"
      block
      :max="max"
      show-progress
      class="mb-3"
      variant="success"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 70,
      max: 100
    }
  }
}
</script>
