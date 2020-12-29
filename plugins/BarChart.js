import { Bar } from 'vue-chartjs'
import ChartJSPluginDatalabels from 'chartjs-plugin-datalabels'

export default {
  extends: Bar,
  props: ['data', 'options'],
  computed: {
    barData () {
      return this.data
    },
    barOptions () {
      return this.options
    }
  },
  watch: {
    data: {
      deep: true,
      handler () {
        if (this.$data._chart) {
          this.$data._chart.destroy()
        }
        this.renderBarChart()
      }
    },
    options: {
      deep: true,
      handler () {
        if (this.$data._chart) {
          this.$data._chart.destroy()
        }
        this.renderBarChart()
      }
    }
  },
  mounted () {
    this.renderBarChart()
  },
  methods: {
    renderBarChart () {
      this.addPlugin(ChartJSPluginDatalabels)
      // this.chartData is created in the mixin.
      // If you want to pass options please create a local options object
      this.renderChart(this.barData, this.barOptions)
    }
  }
}
