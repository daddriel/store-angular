import { Pipe, PipeTransform } from '@angular/core';
import {formatDistanceToNow, intervalToDuration, } from 'date-fns'
import { es } from 'date-fns/locale'
@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string):string {

    // const interval = intervalToDuration({
    //   start: new Date(value),
    //   end: new Date()
    // })

    // if(interval.years){
    //   return 'Hace ' + interval.years + (interval.years > 0 ? ' años': ' año')
    // }
    // if(interval.months){
    //   return interval.months + ' meses'
    // }

    // if(interval.days){
    //   return interval.days + ' dias'
    // }
    // if(interval.minutes){
    //   return 'Hace ' + interval.minutes + (interval.minutes > 0 ? ' minutos': ' minuto')
    // }

    // return 'Ahora mismo'

    return formatDistanceToNow(value,{locale: es, addSuffix: true })

  }

}
