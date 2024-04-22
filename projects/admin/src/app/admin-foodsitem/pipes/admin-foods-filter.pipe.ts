import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminFoodsFilter'
})
export class AdminFoodsFilterPipe implements PipeTransform {

  // declare filter fooditems with ppe
  transform(entirefoodData:any, filteredfoodData:string): any {
    
    if(filteredfoodData.length>=1){

      let searchedfoodData = entirefoodData.filter((foodItem:any)=>{

        if(foodItem.food_name.toLowerCase().includes(filteredfoodData.toLowerCase().trim())){

            return foodItem
        }

      });

      return searchedfoodData;
    }

    else{

        return entirefoodData;
        
    }

  }

}
