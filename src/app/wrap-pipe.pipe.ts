import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wraps'
})
export class WrapPipePipe implements PipeTransform {

  transform(ingredients: any, ...args: any[]): any {
    const wraps:any=[];
    for(const ingredient of ingredients){
      if(ingredient.type === "WRAP"){
        const wrap:any={};
        wrap.id=ingredient.id;
        wrap.name=" a " +ingredient.name;
        wrap.type=ingredient.type;
        wraps.push(wrap);
        

      }
    } 
    return wraps;
  }

}
