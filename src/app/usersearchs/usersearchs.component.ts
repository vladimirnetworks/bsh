import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { xobj, Apilist } from '../apilist';
import { editobj } from '../editobj';
import { myOrders } from '../orders/orders.component';

@Component({
  selector: 'app-usersearchs',
  templateUrl: './usersearchs.component.html',
  styleUrls: ['./usersearchs.component.css']
})
export class UsersearchsComponent implements OnInit {

  latest;
  itemsx: Observable<xobj>;

  constructor(
    private api: ApiService
  ) { 


    let locallates = new Apilist('admin/usersearchs', this.api, myOrders);
    this.latest = locallates;

    this.itemsx = locallates.ret;

  }

  ngOnInit(): void {
  }

}

export class users extends editobj {


  url:any = "dd";
  override fillable = [];
}


@Pipe({name: 'decode'})
export class urldecodePipe implements PipeTransform {
  transform(value: any): any {
    return decodeURIComponent(value);
  }
}


