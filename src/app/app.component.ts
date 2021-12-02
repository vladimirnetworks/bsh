import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { map, Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { Apilist, xobj } from './apilist';
import { editobj } from './editobj';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { addphotoModalContent } from './addphotomodal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bsh';

  latest;
  itemsx: Observable<xobj>;

  constructor(
   // private router: Router,
  //  private api: ApiService //,
    private modalService: NgbModal,
   // private sanitizer: DomSanitizer

   private api: ApiService

  ) {

    let locallates = new Apilist('products', this.api, myProduct);
    this.latest = locallates;

    this.itemsx = locallates.ret.pipe(
      tap(console.log),
      map(function (x) {
        x.items.map((itm: myProduct) => {
          itm.gal = [];

          itm.farsiprice =
            itm.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
            ' تومان ';

          if (itm.photos) {
            var parseim = JSON.parse(itm.photos);
            for (var i = 0; i < parseim.length; i++) {
              // itm.gal.push(parseim[i]['small']);

              if (true) {
                //parseim[i]['small'] = "https://www.behkiana.ir/"+parseim[i]['small'] ;
              }
            }

            itm.gal = parseim;
          }

          if (itm.photos && false) {
            let photos = JSON.parse(itm.photos);

            itm.thumb =
              'https://shopid.ir/De-Ordiner-Skin-Serum-Model-Lactic-Acid-Volume-30-ml-2.jpg?' +
              photos[0]['small'];
          }
          return itm;
        });
        return x;
      })
    );;



  }

  addnew() {

  }

  fileselect(a:any,b:any) {

  }


  addphoto(obj:any) {
    const modalRef = this.modalService.open(addphotoModalContent);


    modalRef.componentInstance.recivehanld = function (res:any) {
      console.log(obj);
      obj.gal.push({ small: res });
    };


    
  }
  remove(a:any) {

  }
}

export class myProduct extends editobj {

  title: any;
  tinytitle: any;
  price!: any;
  photos!: any;
  thumb: any;
  farsiprice: any;
  caption: any;
  gal: any;

  override fillable = ['title', 'price', 'photos', 'caption', 'gal','tinytitle'];
}