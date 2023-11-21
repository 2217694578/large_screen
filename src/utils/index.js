export * from './echarts'

export const formatDatetime = (time, format = 'yyyy-MM-dd') => {
  time = time || Date.now()
  const date = new Date(time)
  const arrWeek = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六'
  ]
  const o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds() //秒
  }

  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }

  if (/(week|星期)/.test(format)) {
    format = format.replace(RegExp.$1, arrWeek[date.getDay()])
  }

  for (const k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }

  return format
}

// 字体大小转换
export function fontSizeRem(size){
  const clientWidth = window.innerWidth || document.documentElement.clientWidth ||
          document.body.clientWidth;
  if (!clientWidth) return;
  let fontSize = clientWidth / 1920;//尺寸大小
  return size* fontSize;
}

