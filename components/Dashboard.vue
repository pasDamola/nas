<template>
  <b-container fluid class="px-0">
    <div class="form-fill px-0">
      <b-row class="mx-0">
        <b-col cols="12" sm="6" md="3">
          <b>Scheme</b>
          <b-select class="mt-2" />
        </b-col>
        <b-col cols="12" sm="6" md="3">
          <b>Batch</b>
          <b-select class="mt-2" />
        </b-col>
      </b-row>
      <b-row class="mx-0">
        <b-col cols="12" md="3" class="my-3">
          <b-card class="custom-card card-height shadow-none">
            <b-card-text class="card-head text-center">
              Total No. Of Schemes
            </b-card-text>
            <b-card-text class="text-center">
              <b>{{ stats.schemes.length || 0 }}</b>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" md="3" class="my-3">
          <b-card class="custom-card card-height shadow-none">
            <b-card-text class="card-head text-center">
              Total No. Of Intervention
            </b-card-text>
            <b-card-text class="text-center">
              <b>2</b>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" md="3" class="my-3">
          <b-card class="custom-card card-height shadow-none">
            <b-card-text class="card-head text-center">
              Total No. Of Beneficiaries
            </b-card-text>
            <b-card-text class="text-center">
              <b>{{ stats.beneficiaries }}</b>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" md="3" class="my-3">
          <b-card class="custom-card card-height shadow-none">
            <b-card-text class="card-head text-center">
              Total No. Of Vendors
            </b-card-text>
            <b-card-text class="text-center">
              <b>{{ stats.vendors }}</b>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" md="3" class="my-3">
          <b-card class="custom-card card-height shadow-none">
            <b-card-text class="card-head text-center">
              Total No. Of Enrollees
            </b-card-text>
            <b-card-text class="text-center">
              <b>25</b>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" md="3" class="my-3">
          <b-card class="custom-card card-height shadow-none">
            <b-card-text class="card-head text-center">
              Total No. Of Applications
            </b-card-text>
            <b-card-text class="text-center">
              <b>{{ stats.applicants }}</b>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" md="3" class="my-3">
          <b-card class="custom-card card-height shadow-none">
            <b-card-text class="card-head text-center">
              Total Funds Available
            </b-card-text>
            <b-card-text class="text-center">
              <b>N2,000,000,000</b>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" md="3" class="my-3">
          <b-card class="custom-card card-height shadow-none">
            <b-card-text class="card-head text-center">
              Total Funds Disbursed
            </b-card-text>
            <b-card-text class="text-center">
              <b>N500,000,000.00</b>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="mx-0">
        <b-col cols="12">
          <b-card class="card-height shadow-none my-3 custom-card">
            <b-row class="mx-0">
              <b-col cols="12" md="6" class="chart-card pie">
                <h4 class="my-4">
                  SCHEME DISTRIBUTION PER SECTOR
                </h4>
                <pie-chart
                  :data="pieData"
                  :options="pieOptions"
                />
              </b-col>
              <!-- <b-col cols="12" md="2"></b-col> -->
              <b-col cols="12" md="6" class="chart-card">
                <h4 class="my-4">
                  SCHEME BENEFICIARIES PER STATE
                </h4>
                <bar-chart
                  :data="histogramData"
                  :options="histogramOptions"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="12">
          <b-card class="shadow-none my-3 chart-card custom-card bar-chart">
            <h4 class="my-4">
              SCHEME DISTRIBUTION PER SECTOR ACROSS YEARS
            </h4>
            <bar-chart :data="barData" :options="barOptions" />
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import PieChart from '@/plugins/Piechart'
// import LineChart from '@/plugins/LineChart'
import BarChart from '@/plugins/BarChart'
export default {
  components: { PieChart, BarChart },
  data (vue) {
    return {
      colors: ['#FA974B', '#FF644D', '#21724D', '#2AD486', '#54428e', '#197278', '#772E25'],
      pieOptions: {
        responsive: true,
        legend: {
          position: 'right',
          labels: {
            fontSize: 16,
            boxWidth: 18,
            fontColor: '#333',
            fontStyle: 'bold',
            padding: 30,
            fontFamily: '"Poppins", sans-serif'
          }
        },
        circumference: 2 * Math.PI,
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              let sum = 0
              const dataArr = ctx.chart.data.datasets[0].data
              dataArr.map((data) => {
                sum += data
              })
              const percentage = (value * 100 / sum).toFixed(2) + '%'
              return percentage
            },
            color: '#fff',
            font: {
              size: 18
            }
          }
        }
      },
      pieData: {
        hoverBackgroundColor: 'red',
        hoverBorderWidth: 10,
        labels: ['Technology', 'Education', 'Agriculture', 'Health'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#FA974B', '#FF644D', '#21724D', '#2AD486', '#54428e', '#197278', '#772E25'],
            data: [45, 25, 10, 20]
          }
        ],
        responsive: true,
        maintainAspectRatio: false,
        pieceLabel: {
          mode: 'percentage',
          precision: 1
        }
      },
      histogramData: {
        labels: ['Abia', 'Adamawa', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi'],
        datasets: [
          {
            label: 'N-Power',
            backgroundColor: '#FA974B',
            data: [25, 15, 40, 12, 7, 22, 31, 10, 27, 19],
            maxBarThickness: 20
          },
          {
            label: 'TraderMoni',
            backgroundColor: '#FF644D',
            data: [20, 8, 12, 9, 42, 17, 25, 22, 32, 10],
            maxBarThickness: 20
          }
        ],
        maintainAspectRatio: false
      },
      histogramOptions: {
        legend: {
          // display: false
        },
        plugins: {
          datalabels: {
            display: false
          }
        },
        scales: {
          xAxes: [{
            categoryPercentage: 0.5,
            barPercentage: 0.9
          }]
        }
      },
      barData: {
        hoverBackgroundColor: 'red',
        hoverBorderWidth: 10,
        labels: [2018, 2019, 2020],
        datasets: [
          {
            label: 'Health',
            backgroundColor: '#2AD486',
            data: [20, 25, 10]
          },
          {
            label: 'Education',
            backgroundColor: '#21724D',
            data: [40, 35, 20]
          },
          {
            label: 'Agriculture',
            backgroundColor: '#FF644D',
            data: [10, 20, 25]
          },
          {
            label: 'Technology',
            backgroundColor: '#FA974B',
            data: [30, 30, 45]
          }
        ],
        responsive: true,
        pieceLabel: {
          mode: 'percentage',
          precision: 1
        }
      },
      barOptions: {
        legend: {
          labels: {
            fontSize: 16,
            boxWidth: 18,
            fontColor: '#333',
            fontStyle: 'bold',
            padding: 30,
            fontFamily: '"Poppins", sans-serif'
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            display: false
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              offsetGridLines: true
            },
            ticks: {
              labels: ['0', '20%', '40%', '60%', '80%', '100%'],
              min: 0,
              max: 100,
              stepSize: 20
            }
          }]
        },
        hoverBorderWidth: 20
      },
      width: screen.width,
      stats: {
        applicants: 0,
        beneficiaries: 0,
        companies: 0,
        vendors: 0,
        deployments: 0,
        schemes: 0
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
    this.changeChartByWidth()
    this.getDashboardData()
    this.getSchemes()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.width = screen.width
      this.changeChartByWidth()
    },
    changeChartByWidth () {
      if (this.width < 1024) {
        this.pieOptions.legend.position = 'top'
        this.pieOptions.legend.labels.boxWidth = 18
        this.barOptions.legend.labels.padding = 10
        this.barOptions.legend.labels.fontSize = 12
        this.barOptions.legend.labels.boxWidth = 12
        this.pieOptions.plugins.datalabels.font.size = 12
        this.pieOptions.plugins.datalabels.display = true
      } else {
        this.pieOptions.legend.position = 'right'
        this.pieOptions.legend.labels.fontSize = 16
        this.pieOptions.legend.labels.fontSize = 16
        this.pieOptions.legend.labels.padding = 30
        this.pieOptions.plugins.datalabels.font.size = 18
        this.pieOptions.plugins.datalabels.display = true
      }

      if (this.width < 600) {
        this.pieOptions.plugins.datalabels.display = false
      }
    },
    getDashboardData () {
      this.$axios.get('dashboard').then(({ data }) => {
        console.log(data)
        this.stats.applicants = data.Applicants
        this.stats.beneficiaries = data.applicants.filter(el => el.status && el.status.toLowerCase() === 'beneficiary').length
        this.stats.vendors = data.Vendors
        this.stats.companies = data.Company
        this.getPieChartData(data.applicants)
        this.getBarChartData(data.applicants)
      }).catch(() => {
        this.fetchError()
      })
    },
    getPieChartData (applicants) {
      let sectors = applicants.map(el => el.programme)
      sectors = [...new Set(sectors)].filter(Boolean)
      this.pieData.labels = sectors
      const sectorLengths = sectors.map((sector) => {
        const applicantsBySector = applicants.filter(el => el.programme === sector)
        return applicantsBySector.length
      })
      this.pieData.datasets[0].data = sectorLengths
    },
    getBarChartData (applicants) {
      let sectors = applicants.map(el => el.programme)
      sectors = [...new Set(sectors)].filter(Boolean)
      let years = applicants.map(el => el.year_of_application)
      years = [...new Set(years)].filter(Boolean)
      const data = sectors.map((sector, index) => {
        const sectorData = applicants.filter(el => el.programme === sector)
        const yearData = years.map((el) => {
          const data = sectorData.filter(data => data.year_of_application === el)
          return data.length
        })
        const barData = {
          label: sector,
          backgroundColor: this.colors[index],
          data: yearData
        }
        return barData
      })
      this.barData.labels = years
      this.barData.datasets = data
    },
    getSchemes () {
      this.$axios.get('schemes/all').then(({ data }) => {
        this.stats.schemes = data
      }).catch(() => {
        this.fetchError()
      })
    },
    fetchError () {
      this.$bvToast.toast('Something went wrong, please refresh', {
        title: 'Error',
        solid: true,
        variant: 'danger',
        toaster: 'b-toaster-top-right'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.custom-card::v-deep {
  border-radius: 5px;
  .card-height {
    height: 100%;
    box-shadow: 0 0 4px 0 rgba(168, 168, 168, 0.42);
  }

  .card-text {
    font-size: 20px;
  }

  .card-head {
    color: #a5a5a5;
    font-size: 16px;
  }
}

.form-fill {
  background-color: #f7f7f7;
  padding: 20px;
}

.mycontent-left {
  border-right: 1px solid #333;
}

.chart-card {
  h4 {
    font-weight: 600;
    font-size: 1.4rem;
  }
}

.pie {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 80%;
    background-color: transparentize($color: #000, $amount: 0.9);
    width: 1px;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 10px;
    &::after {
      bottom: 0;
      right: unset;
      top: unset;
      left: 50%;
      transform: translateX(-50%);
      height: 1px;
      width: 80%;
    }
  }
}

.bar-chart {
  .card-body > div {
    height: 600px;
    position: relative;

    @media screen and (max-width: 700px) {
      height: 300px;
    }

    @media screen and (max-width: 1200px) {
      height: 500px;
    }
  }
}
</style>
