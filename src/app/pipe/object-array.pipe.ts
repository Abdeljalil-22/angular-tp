import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectArray',
  standalone: true
})
export class ObjectArrayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any[] {

    let tab:any[]= []

    for (const key in value) {
//tab.keys = value.keys
tab.push(value[key])      
// const element = object[key];
        
  
    }
    // tab.entries =value.entries
    return tab;
  }

}
