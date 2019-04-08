<template>
  <div>
    {{data}}
    <div id='charts' style="width:400px;height:400px"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: '123'
    }
  },
  created () {
  },
  methods: {
    getCharts () {
      let myChart = this.echarts.init(document.getElementById('charts'))
      var times = [[1550207499471, 2, 'a'], [1550207516600, 1, 'b'], [1550207529934, 'c']]
      // var times1 = [[1550207499471, 1, 'd'], [1550207516600, 4, 'e'], [1550207529934, 3, 'f']]
      var time2 = [
        {
          name: '表1',
          // datas: [],
          value: [1550207499471, 1]
        },
        {
          name: '表1',
          // datas: [],
          value: [1550207516600, 3]
        },
        {
          name: '表1',
          // datas: [],
          value: [1550207529934, 2]
        }
      ]
      let option = {
        title: {
          text: 'test'
        },
        tooltip: {
          trigger: 'axis',
          formatter: params => {
            let str = params[0].seriesName + '<br/>'
            params.forEach(x => {
              str += x.marker + '   ' + x.seriesName + ':' + x.data[1] + '<br/>'
            })
            // return str
            return str
          }
        },
        legend: {
          data: ['ip', 'ip1']
        },
        xAxis: {
          type: 'time'
          // name: '时间'
        },
        yAxis: {},
        series: [{
          name: 'ip',
          type: 'line',
          smooth: true,
          data: times
        },
        {
          name: 'ip1',
          type: 'line',
          smooth: true,
          data: time2
        }]
      }
      myChart.setOption(option)
    }
  },
  mounted () {
    this.getCharts()
  }
}
</script>
