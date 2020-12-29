<template>
  <label class="text-reader">
    <b-form-file
      class="file"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      @change="loadTextFromFile"
    />
  </label>
</template>

<script>
export default {
  methods: {
    loadTextFromFile (ev) {
      const file = ev.target.files[0]
      const reader = new FileReader()

      reader.onload = e => this.$emit('load', e.target.result)
      reader.readAsText(file)
    }
  }
}
</script>
