<template lang="pug">
.page
  //- 左侧容器
  .left-top-wrapper
    banner-title(title="可视化图表1")
    .include-title-area-content
      .echarts#basicPie

  .left-middle-wrapper
    banner-title(title="可视化图表2")
    .include-title-area-content
      .echarts#basicLine

  //- 中央容器
  .middle-wrapper
    .map-content
      #map

  //- 右侧容器
  .right-top-wrapper
    banner-title(title="可视化图表3")
    .include-title-area-content
      .echarts#basicRadar

  .right-middle-wrapper
    banner-title(title="可视化图表4")
    .include-title-area-content
      .echarts#basicBar

  //- 底部容器
  .bottom-left-wrapper
    banner-title(title="横向排行条形图")
    .include-title-area-content
      .echarts#rowRankBar

  .bottom-middle1-wrapper
    banner-title(title="数据展示5")
    .include-title-area-content
      el-image(:src='require("../../assets/image/bottom-middle.png")' fit="contain" style="height:100%;width:100%;")

  .bottom-middle2-wrapper
    banner-title(title="视频展示(MP4)")
    .include-title-area-content
      video-player(id="my-mp4" :src="videoUrl")


  .bottom-right-wrapper
    banner-title(title="表格展示数据")
    .include-title-table-area-content
      card-background
        template(#content)
          custom-table(
            :header-title="tableHeader"
            :table-data="tableData"
          )


</template>

<script>
// components
import BannerTitle from '@/components/BannerTitle';
import CustomTable from '@/components/CustomTable'
import VideoPlayer from '@/components/VideoPlayer'
import CardBackground from '@/components/CardBackground'

// image
import MapImage from '@/assets/image/1.jpg'

// echarts
import { basicPie, basicRadar, basicLine, rowRankBar, basicBar } from '@/utils';

export default {
  name:"BasicScreenPage",
  components:{
    BannerTitle,
    CustomTable,
    VideoPlayer,
    CardBackground
  },
  data(){
    return {
      map:null,
      videoUrl:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
      tableHeader:[
        {
          field:'name',
          label:'名称'
        },
        {
          field:'address',
          label:"地点"
        },
        {
          field:"time",
          label:"时间"
        }
      ],
      tableData:[
        {
          id:"1",
          name:'测试',
          address:"地球",
          time:"2023/11/23 9:56"
        },
        {
          id:"2",
          name:'测试',
          address:"中国",
          time:"2023/11/23 9:56"
        },
        {
          id:"3",
          name:'测试',
          address:"上海",
          time:"2023/11/23 9:56"
        },
        {
          id:"4",
          name:'测试',
          address:"宝山",
          time:"2023/11/23 9:56"
        },
        {
          id:"5",
          name:'测试',
          address:"友谊路",
          time:"2023/11/23 9:56"
        },
        {
          id:"6",
          name:'测试',
          address:"三号楼",
          time:"2023/11/23 9:56"
        }
      ]
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.initMap()
    })
    this.drawAllEcharts()
  },
  methods:{
    // 初始化地图
    initMap(){
      this.map = new window.BSMap("#map",{
        tooltip:{
          show:true,
          type:'normal'
        }
      })

      const mapConfig = {
        src:MapImage,
        size:[5000,5000],
        center:[-1,-1],
        zoom:2
      }

      this.map.load(mapConfig,() => {

      })
    },

    drawAllEcharts(){
      this.getBasicPieData() // 饼图
      this.getBasicRadar() //雷达
      this.getBasicLineData() //折线
      this.getBasicBarData() //柱状
      this.getRowRankBarData() // 横向排行图
    },
    // 左一
    getBasicPieData(){
      const data = {
        seriesData:[
          {
            name:"数据一",
            value:50
          },
          {
            name:"数据二",
            value:30
          },
          {
            name:"数据三",
            value:10
          },
          {
            name:"数据四",
            value:10
          }
        ]
      }

      const config = {
        text:'基础饼状图',
        name:"basic pie",
        center:['50%','60%']
      }
      this.drawBasicPie(data, config)
    },
    drawBasicPie(data, config){
      this.$nextTick(() => {
        basicPie(data, 'basicPie', config)
      })
    },

    // 左二
    getBasicLineData(){
      const data = {
        xAxisData:[
          "2023/11/18",
          "2023/11/19",
          "2023/11/20",
          "2023/11/21",
          "2023/11/22",
          "2023/11/23",
          "2023/11/24"
        ],
        seriesData: [
          {
            name:"火焰报警",
            value:[0,0,5,9,1,6,3]
          },
          {
            name:"未戴安全帽",
            value:[0,0,11,21,15,14,9]
          },
          {
            name:"超速",
            value:[5,3,0,1,2,4,3]
          }
        ]
      }

      const config = {
        xAxisName:"日期",
        yAxisName:'条',
        top:'15%',
        left:'10%',
        bottom:'15%',
        right:'10%'
      }
      this.drawBasicLine(data,config)
    },
    drawBasicLine(data, config){
      this.$nextTick(() => {
        basicLine(data, 'basicLine', config)
      })
    },

    // 右一
    getBasicRadar(){
      const data = {
        seriesData: [
          {
            value:[20,27,80,50,30],
            name:'AI服务器一'
          },
          {
            value:[16,37,77,29,60],
            name:'AI服务器二'
          }
        ]
      }

      const config = {
        orient:'vertical',
        legendleft:'right',
        center:['50%','55%'],
        radius:'75%',
        indicator:[
          {
            name:'CPU',
          },
          {
            name:'GPU',
          },
          {
            name:'温度',
          },
          {
            name:'内存',
          },
          {
            name:"速度"
          }
        ]
      }
      this.drawBasicRadar(data, config)
    },
    drawBasicRadar(data, config){
      this.$nextTick(() => {
        basicRadar(data, 'basicRadar', config)
      })
    },

    // 右二
    getBasicBarData(){
      const data = {
        xAxisData: ["安全帽案例","玩手机案例","火焰案例"],
        seriesData: [100,200,300]
      }

      const config = {
        top:"15%",
        left:"12%",
        right:"12%",
        bottom:"10%",
        xAxisName:"分类",
        yAxisName:"例"
      }

      this.drawBasicBar(data, config)
    },
    drawBasicBar(data, config){
      this.$nextTick(() => {
        basicBar(data, 'basicBar', config)
      });
    },

    // 底左
    getRowRankBarData(){
      const data = {
        dimensions:['id','name','alarmNumber'],
        source:[
          {id:"1",name:"未戴安全帽",alarmNumber:119},
          {id:"2",name:"火焰报警",alarmNumber:81},
          {id:"3",name:"气体报警",alarmNumber:51},
          {id:"4",name:"超速报警",alarmNumber:16},
        ]
      }
      const config = {
        dimension:'alarmNumber',
        order:'desc',
        left:'2%',
        top:'0%',
        bottom:'2%',
        right:'5%',
        enCodeX:'alarmNumber',
        enCodeY:'name'
      }
      this.drawRowRankBar(data,config)
    },
    drawRowRankBar(data,config){
      this.$nextTick(() => {
        rowRankBar(data,'rowRankBar',config)
      })
    }
  }
}
</script>

<style lang="stylus" scoped src="@/style/views/basic_screen.styl"></style>