import { Moniter } from '@/index'
export function observerTiming(instance: Moniter) {
  console.log(performance.getEntriesByType('navigation'));
  
  if (document.readyState === 'complete') {

  } else {

  }
}
