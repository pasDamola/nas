import { Doughnut } from 'vue-chartjs'
import ChartJSPluginDatalabels from 'chartjs-plugin-datalabels'

export default {
  extends: Doughnut,
  props: ['data', 'options'],
  computed: {
    pieData () {
      return this.data
    },
    pieOptions () {
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
        this.renderPieChart()
      }
    },
    options: {
      deep: true,
      handler () {
        if (this.$data._chart) {
          this.$data._chart.destroy()
        }
        this.renderPieChart()
      }
    }
  },
  mounted () {
    this.renderPieChart()
  },
  methods: {
    renderPieChart () {
      this.addPlugin(ChartJSPluginDatalabels)
      // this.chartData is created in the mixin.
      // If you want to pass options please create a local options object
      this.renderChart(this.pieData, this.pieOptions)
    }
  }
}
