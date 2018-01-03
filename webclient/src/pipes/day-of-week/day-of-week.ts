import {Pipe, PipeTransform} from '@angular/core';

/**
 * Generated class for the DayOfWeekPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'dayOfWeek',
})
export class DayOfWeekPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number) {
    let jour: string;
    switch (value) {
      case 1:
        jour = "Lundi";
        break;
      case 2:
        jour = "Mardi";
        break;
      case 3:
        jour = "Mercredi";
        break;
      case 4:
        jour = "Jeudi";
        break;
      case 5:
        jour = "Vendredi";
        break;
      case 6:
        jour = "Samedi";
        break;
      case 7:
        jour = "Dimanche";
        break;
    }
    return jour;
  }
}
