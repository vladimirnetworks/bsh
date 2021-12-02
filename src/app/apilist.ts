import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { concatMap, map, merge, Observable, of, scan, Subject } from 'rxjs';






export class Apilist {


  ret: Observable<xobj>;
  nextSubj;
  addSubj;
  removeSubj;
  publicpath;


  req(path: string) {
    let self = this;
    return this.api.get(path).pipe(
      map(function (x) {
        return x.data.map((itm:any[]) => {

          return Object.assign(new self.objctype(self.api, self), itm);

        });
      })
    );
  }

  constructor(private path: string, private api: ApiService, private objctype: any) {


    this.publicpath = this.path;
    this.addSubj = new Subject<any>();
    let addsubjob:Observable<xobj> = this.addSubj.asObservable();


    this.removeSubj = new Subject<any>();
    let removeSubjob:Observable<xobj> = this.removeSubj.asObservable();



    let first = this.req(this.path).pipe(map(function (x) {

      let r = new xobj();
      r.items = x;
      r.t = 'first';

      return r;
    }));
    this.nextSubj = new Subject<Number>();


    let nextSubjob = this.nextSubj.asObservable();

    let nexto:Observable<xobj> = nextSubjob.pipe(


      concatMap((p) => {
        let xzc = this.req('products' + '?page=2').pipe(map(function (x) {

          let r = new xobj();
          r.items = x;
          r.t = 'more';

          return r;
        }));
        return xzc;
      })


    );





    this.ret = merge(first, nexto, addsubjob, removeSubjob).pipe(


      scan(function (a: xobj, b: xobj) {



        if (b.t == "new") {
          console.log(b.items)
          a.items = b.items.concat(a.items);
        }

        if (b.t == "more") {
          a.items.push(...b.items);
        }

        if (b.t == "remove") {


          const index = a.items.indexOf(b.items[0]);




          if (index > -1) {
            a.items.splice(index, 1);

          }


        }
       

        return a;

      })




    );

  }




  more() {
    this.nextSubj.next(2);
  }

  add(fields: any) {

    let newitem = Object.assign(new this.objctype(this.api, this), fields)

    let r = new xobj();
    r.items = [newitem];
    r.t = 'new';
    this.addSubj.next(r);
  }

  remove(targ: any) {


    targ.remove();
    let r = new xobj();
    r.items = [targ];
    r.t = 'remove';

    this.removeSubj.next(r);
  }

}


export class xobj {
  items: any;
  t: any;
}