import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Apilist, xobj } from '../apilist';
import { editobj } from '../editobj';
import { myOrders } from '../orders/orders.component';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  latest;
  itemsx: Observable<xobj>;

  
  constructor(
    private api: ApiService
  ) { 


    let locallates = new Apilist('admin/monitoring', this.api, monitor);
    this.latest = locallates;

    this.itemsx = locallates.ret;

  }


  ngOnInit(): void {
  }

}


export class monitor extends editobj {


  url:any = "dd";
  override fillable = [];
}


@Pipe({name: 'ipapi'})
export class ipapiPipe implements PipeTransform {
  transform(value: any): any {
    setTimeout(function() {
      return "zzz";
    },1000);
   
  }
}