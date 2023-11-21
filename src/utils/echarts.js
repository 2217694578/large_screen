const echarts = require('echarts/lib/echarts');
require('echarts/lib/component/grid');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/dataZoom'); // 数据收缩放大
require('echarts/lib/chart/line'); // 折线图
require('echarts/lib/chart/bar'); // 柱状图
require('echarts/lib/chart/pie'); // 饼状图


export const drawEcharts = (option , id) => {
  let dom = document.getElementById(id)
  let echart = echarts.init(dom)
  option && echart.setOption(option)

  window.addEventListener('resize',function(){
    echart.resize()
  })
}


// 基础折线图
export const basicLine = (data,id) => {
  const option = {

  }

  drawEcharts(option,id)
}

// 基础折线面积图
export const basicAreaLine = (data,id) => {
  const option = {

  }

  drawEcharts(option,id)
}

