import { ApiService } from './api.service';
import { Apilist } from './apilist';

export interface saveobjInterface {
  [key: string]: any;
}

export class editobj {

  status = 'idle';
  id: any;
  path;
  cntx: any;


  fillable: any;

  constructor(private api: ApiService, contex: Apilist) {
    this.path = contex.publicpath
    // this.cntx = contex;
  }




  save() {

    this.status = "saving";

    let saveobj: saveobjInterface = {};
    const me = <saveobjInterface>this;

    for (let i = 0; i < this.fillable.length; i++) {
      saveobj[this.fillable[i]] = me[this.fillable[i]];
    }


    let savex;

    if (!this.id || this.id == 0) {

     

      savex = this.api.post(this.path.replace(/\?.*/,""), saveobj).subscribe((ret) => {
        this.id = ret['data']['id'];
        this.status = "idle";

      });
    } else {
       savex = saveobj['id'] = this['id'];
      this.api
        .put(this.path.replace(/\?.*/,"") + '/' + this['id'], saveobj)
        .subscribe((ret) => {
          this.status = "idle";
        });
    }


  }




  remove() {
    console.log(this.id);

    this.api
      .delete(this.path.replace(/\?.*/,"") + '/' + this['id'], {})
      .subscribe(console.log);


  }

}
