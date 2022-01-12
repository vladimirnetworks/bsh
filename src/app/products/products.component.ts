import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, tap } from 'rxjs';
import { addphotoModalContent } from '../addphotomodal';
import { ApiService } from '../api.service';
import { Apilist, xobj } from '../apilist';
import { editobj } from '../editobj';

import { FormsModule } from '@angular/forms';
import { catModalContent } from '../catmodal';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {



  
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

          itm.dtl = itm.caption.trim().replace(/\n/g,"[br]");
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
    this.latest.add({ id: '0', title: '', price: '', photos: '' });
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



  cat(obj:any) {
    const modalRefx = this.modalService.open(catModalContent);
    modalRefx.componentInstance.rootid = 0;


    modalRefx.componentInstance.prodobj = obj;

    modalRefx.componentInstance.catahnld = function(res:any) {
    

        //console.log(res.catid);

       if (res.do == 'add') {
        obj.cat.push(res.catid);
       }

       if (res.do == 'remove') {


        var i = 0;
        while (i <  obj.cat.length) {
          if ( obj.cat[i] === res.catid) {
            obj.cat.splice(i, 1);
          } else {
            ++i;
          }
        }

       }
     
       
       console.log(obj.cat);

    };

  }


  remove(obj:any) {
    if (confirm("remove "+obj.title+" ?")) {
      this.latest.remove(obj);
    }
  }

}


export class myProduct extends editobj {

  title!: any;
  tinytitle!: any;
  instagramed!: any;
  searchkey!: any;
  price!: any;
  photos!: any;
  thumb!: any;
  farsiprice!: any;
  caption!: any;
  gal!: any;

  cat:any = [];

  dtl:any;

  override fillable = ['title', 'price', 'photos', 'caption', 'gal','tinytitle','cat','searchkey','instagramed'];
}