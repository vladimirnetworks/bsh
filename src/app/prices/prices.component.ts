import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Apilist, xobj } from '../apilist';
import { editobj } from '../editobj';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {


  latest;
  itemsx: Observable<xobj>;
  
  constructor(
    private api: ApiService
  ) { 


    let locallates = new Apilist('fastprice', this.api, myProduct);
    this.latest = locallates;

    this.itemsx = locallates.ret;

  }

  ngOnInit(): void {
  }

  update(obj:any) {
    obj.save();
  }

  modelChanged(e:any,obj:any) {
    obj.status = "changed";
   
  }
}

export class myProduct extends editobj {

  title: any;
  price!: any;



  override fillable = ['price'];
}
