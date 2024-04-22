import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodsFilter'
})
export class FoodsFilterPipe implements PipeTransform {

  // declare filter food data 
  transform(entirefoodData:any, filteredfoodData:string): any {
    
    if(filteredfoodData.length>=1){

      let searchedfoodData = entirefoodData.filter((foodItem:any)=>{

          if(foodItem.food_name.toLowerCase().includes(filteredfoodData.toLowerCase().trim())){
              return foodItem;
          }
      });

        return searchedfoodData;
    }
    else{
      return entirefoodData;
    }
    
  }

}
