import service from '@/utils/request';

export const getScreenInfo = data => {
  return service({
    method:'POST',
    url:'/large_screen',
    data:data
  })
}