import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nonwraps'
})
export class NonWrapPipePipe implements PipeTransform {

  transform(ingredients: any, ...args: any[]): any {
    const nonWraps:any=[];
    for(const ingredient of ingredients){
      if(ingredient.type !== "wrap"){
        nonWraps.push(ingredient);
      }
    }
    return nonWraps;
  }

}
