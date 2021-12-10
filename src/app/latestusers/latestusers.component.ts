import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Apilist, xobj } from '../apilist';
import { editobj } from '../editobj';
import { myOrders } from '../orders/orders.component';

@Component({
  selector: 'app-latestusers',
  templateUrl: './latestusers.component.html',
  styleUrls: ['./latestusers.component.css']
})
export class LatestusersComponent implements OnInit {

  latest;
  itemsx: Observable<xobj>;

  constructor(
    private api: ApiService
  ) { 


    let locallates = new Apilist('admin/latestusers', this.api, myOrders);
    this.latest = locallates;

    this.itemsx = locallates.ret;

  }

  ngOnInit(): void {
  }

}


export class users extends editobj {



  override fillable = [];
}

