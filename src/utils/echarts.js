import { fontSizeRem } from '@/utils/index.js'
const echarts = require('echarts/lib/echarts');
require('echarts/lib/component/grid'); // 偏移量
require('echarts/lib/component/title'); // 标题
require('echarts/lib/component/legend');  // 小方块
require('echarts/lib/component/tooltip'); // hover显示
require('echarts/lib/component/dataZoom'); // 数据收缩放大
require('echarts/lib/chart/line'); // 折线图
require('echarts/lib/chart/bar'); // 柱状图
require('echarts/lib/chart/pie'); // 饼状图
require('echarts/lib/chart/radar'); // 雷达图


export const drawEcharts = (option , id) => {
  let dom = document.getElementById(id)
  if(dom === null) return

  let echart = echarts.init(dom)
  option && echart.setOption(option)

  window.addEventListener('resize',function(){
    echart.resize()
  })
}


// 基础折线图
export const basicLine = (data,id,config) => {
  const option = {
    tooltip:{
      trigger:'axis',
      backgroundColor:'rgba(27,44,83, .85)',
      borderColor:'#29abe2',
      textStyle:{
        color:'#fff',
        fontSize:fontSizeRem(14)
      }
    },
    grid:{
      top: config.top,
      left: config.left,
      right: config.right,
      bottom: config.bottom
    },
    xAxis:{
      type:'category',
      name:config.xAxisName,
      nameLocation:'end',
      boundaryGap:false,
      data:data.xAxisData,
      axisLabel:{
        interval:0,
        width:50,
        overflow:"breakAll",
        fontSize:fontSizeRem(14),
        color:'black'
      }
    },
    yAxis:{
      show:true,
      name:config.yAxisName,
      nameLocation:'end',
      type:'value',
      axisLine:{
        show:true,
      },
      axisLabel:{
        show:true,
        fontSize:fontSizeRem(14),
        color:'black'
      },
      minInterval:1,
    },
    series:data.seriesData.map((v) => ({
      type:'line',
      smooth:0.1,
      showSymbol:false,
      name:v.name,
      data:v.value,
      lineStyle:{
        width:2,
        type:'solid'
      }
    }))
  }

  drawEcharts(option,id)
}

// 基础柱状图
export const basicBar = (data,id,config) => {
  const option = {
    grid:{
      top:config.top,
      left:config.left,
      right:config.right,
      bottom:config.bottom
    },
    tooltip:{
      trigger:'axis'
    },
    xAxis:{
      type:'category',
      data:data.xAxisData,
      name:config.xAxisName,
      nameLocation:'end',
      axisLine:{
        lineStyle:{
          color:'black'
        }
      },
      axisLabel:{
        color:'black',
        fontSize:fontSizeRem(14)
      }
    },
    yAxis:{
      type:'value',
      name:config.yAxisName,
      nameLocation:'end',
      minInterval:1,
      axisLine:{
        show:true,//是否显示轴线
        // symbol:['none','arrow'], //轴线两端是否显示箭头
        lineStyle:{
          color:'black',
          width:1
        }
      },
      axisLabel:{
        show:true, //是否显示刻度标签
        color:'black',
        fontSize:fontSizeRem(14)
      }
    },
    series:[
      {
        type:'bar',
        data:data.seriesData
      }
    ]
  }

  drawEcharts(option,id)
}

// 排行横向柱状图
/**
 * @param {*} data 数据
 * @param {*} id  dom
 * @param {*} config 配置
 *
 */
export const rowRankBar = (data,id,config) => {
  const option = {
    dataset:[
      {
        dimensions:data.dimensions, //(array) 对数据数组中各个字段的说明
        source:data.source,
      },
      {
        transform:{
          type:'sort',
          config:{
            dimension:config.dimension, // 根据dimension中哪个字段排序
            order:config.order, //升序降序
          }
        }
      }
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    grid: {
      left:config.left,
      top:config.top,
      bottom:config.bottom,
      right:config.right,
      containLabel:true
    },
    xAxis: {
      type: "value",
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: { show: false },
      axisLabel: { show: false },
      minInterval:1
    },
    yAxis: {
      type: "category",
      // y轴名称
      inverse: true,
      splitLine: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel:{
        interval:0,
        fontSize:fontSizeRem(14),
        color:'black'
      }
    },
    series: [
      {
        type: "bar",
        barWidth: 14,
        barGap: '10%',
        smooth: true,
        encode:{
          x:config.encodeX,
          y:config.encodeY
        },
        //Y轴数字显示部分
        label: {
          show: true,
          position: 'right',
          color:'black',
          fontSize:fontSizeRem(14),
        },
        itemStyle: {
          borderRadius:[0,20,20,0],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 1, color: "#f28883" },
            { offset: 0.5, color:"#f66e62" },
            { offset: 0, color: "#f03710" },
          ]),
        }
      }
    ]
  }
  drawEcharts(option,id)
}

// 基础饼图
export const basicPie = (data,id,config) => {
  const option = {
    title:{
      show: config.text ? true : false,
      text:config.text,
      left:'center',
      textStyle:{
        fontSize:fontSizeRem(18)
      }
    },
    tooltip:{
      trigger:'item'
    },
    legend:{
      orient:'vertical', //排列方式 vertical竖 horizontal横
      left:'right',
      type: config.legendType ? config.legendType : 'plain' ,
    },
    series: [
      {
        name:config.name,
        data:data.seriesData,
        type:'pie',
        radius:[0,'60%'],
        center:config.center,
        legendHoverLink:true, // 联动效果
        clockwise:true, //是否顺时针排列
        avoidLabelOverlap:true, //防止标签重叠
        stillShowZeroSum:true, //数据为0时是否显示扇区
        emphasis:{
          itemStyle:{
            shadowBlur:10,
            shadowOffsetX:0,
            shadowColor:'rgba(0, 0, 0, 0.5)'
          }
        },

      }
    ]
  }

  drawEcharts(option, id)
}

// 基础雷达图
export const basicRadar = (data, id, config) => {
  const option = {
    title:{
      show: config.title ? true : false,
      text:config.title,
      textStyle:{
        fontSize:fontSizeRem(16)
      },
      left:'center'
    },
    legend:{
      orient:config.orient ? config.orient : 'vertical', //排列方式 vertical竖 horizontal横
      type: config.legendType ? config.legendType : 'plain' ,
      left: config.legendLeft,
      top: config.legendTop,
      bottom: config.legendBottom,
    },
    tooltip:{
      trigger:'item',
      confine:true
    },
    radar:[{
      shape:'polygon',
      splitNumber:5,
      indicator:config.indicator, // 雷达图的指示器
      center:config.center ? config.center : ['50%', '50%'],
      radius:config.radius? config.radius : '60%',
      axisName:{
        color:'black',
        fontSize:fontSizeRem(14)
      },
      splitLine:{
        lineStyle:{
          width:2,
          color:'#ccc'
        }
      }
    }],
    series:[
      {
        type:'radar',
        name:config.name,
        data:data.seriesData,
        areaStyle:{
          color:{
            type:'radial',
            x:0.5,
            y:0.5,
            r:0.5,
            colorStops:[
              {
                offset:0,
                color:'#b0bed3'
              },
              {
                offset:0.5,
                color:'#1cc2c0'
              },
              {
                offset:1,
                color:'#bbde70'
              }
            ]
          }
        }
      }
    ]
  }

  drawEcharts(option, id)
}

