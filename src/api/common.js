import service from '@/utils/request';
import { USE_MOCK, getMockJson } from './mock';

export const getScreenInfo = data => {
  if(!USE_MOCK){
    return service({
      method:'POST',
      url:'/large_screen',
      data:data
    })
  }
  return getMockJson('basic')
}