import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Apilist, xobj } from '../apilist';
import { editobj } from '../editobj';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  latest!: Apilist;
  itemsx!: Observable<xobj>;



  constructor(   private api: ApiService , private activatedroute: ActivatedRoute) { 


    this.activatedroute.paramMap.subscribe((z:any) => {
      let locallates = new Apilist('categories/'+z['params']['parentid'], this.api, myCat);
    
      this.latest = locallates;
      this.itemsx = locallates.ret

      console.log();
    });

    //let locallates = new Apilist('categories/0', this.api, myCat);
    //this.latest = locallates;
    //this.itemsx = locallates.ret
    
  }

  ngOnInit(): void {
  }

  addnew() {
    this.latest.add({ id: '0', title: 'new'});
  }

  remove(obj:any) {
    if (confirm("remove "+obj.title+" ?")) {
      this.latest.remove(obj);
    }
  }

}

export class myCat extends editobj {

  title: any;
  parent: any;

  override fillable = ['title','parent'];
}