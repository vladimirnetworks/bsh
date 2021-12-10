import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import { map, Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { xobj, Apilist } from '../apilist';
import { myProduct } from '../app.component';
import { editobj } from '../editobj';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


  latest;
  itemsx: Observable<xobj>;
  
  constructor(
    private api: ApiService
  ) { 


    let locallates = new Apilist('admin/orders', this.api, myOrders);
    this.latest = locallates;

    this.itemsx = locallates.ret.pipe(map(function(ord) {

          
      ord.items.map((itm: myOrders) => {
        itm.orderstatus = itm.shipping_status;
      });
         
        return ord;
    }));

  }
  

  ngOnInit(): void {
  }


  savestatus(e:any) {
      console.log(e);
  }

  chpeyment(o:any) {
    
    let txt = "";
    if (o == 0) {
      txt = "پرداخت نشده";
    }

    if (o == 1) {
      txt  ="پرداخت شده"
     }

     return txt;
    
  }



}

export class myOrders extends editobj {

  encoded_id: any;

  orderstatus!:any;

  shipping_status!:any;

  override fillable = ['price','shipping_status'];
}



