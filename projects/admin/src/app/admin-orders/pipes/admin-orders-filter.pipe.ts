import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminOrdersFilter'
})
export class AdminOrdersFilterPipe implements PipeTransform {

  transform(entireOrders:any, filterOrders:string): any {

    if(filterOrders.length>=1){

      let searchedCustomersorder = entireOrders.filter((ordersItem:any)=>{

        if(ordersItem.user_id.user_name.toLowerCase().includes(filterOrders.toLowerCase().trim())){
          return ordersItem;
        }
      });

      return searchedCustomersorder;
    }
    else{
      return entireOrders;
    }
  }

}
