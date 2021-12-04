import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    ViewChild,
  } from '@angular/core';
  import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Apilist, xobj } from './apilist';
import { editobj } from './editobj';


  
  @Component({
    selector: 'cat-modal-content',
    template: `
      <div class="modal-header">
        <h4 class="modal-title">cat</h4>
        <button type="button" class="btn btn-danger" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
       
      
      <div class="" *ngIf="this.itemsx | async as jak" style="direction:rtl">

        <div *ngFor="let obj of jak.items" class="m-3">
        <input type="checkbox"  (change)="sett(obj.id,$event)">

        {{obj.title}} <button class="btn btn-success" (click)="cat(obj,obj.id)">sub</button>
        </div>

        </div>
      <div class="modal-footer">

      </div>
    `,
  })
  export class catModalContent implements AfterViewInit {
    [x: string]: any;


    latest!: Apilist;
    itemsx!: Observable<xobj>;
    @Input() rootid:any;

    @Input() catahnld:any;

    constructor( private api: ApiService,public activeModal: NgbActiveModal,    private modalService: NgbModal) {



    }
    ngAfterViewInit(): void {


      let locallates = new Apilist('onelevelchild/'+this.rootid, this.api, myCat);
      this.latest = locallates;
      this.itemsx = locallates.ret


      this.itemsx.subscribe(console.log);


    }
  

    sett(a:any,b:any) {
   
   if (b.target.checked) {
     this.catahnld({do:"add",a});
   } else {
    this.catahnld({do:"remove",a});
   }
    }

   
    cat(obj:any,rootid:any) {
      const modalRef = this.modalService.open(catModalContent);
            modalRef.componentInstance.rootid = rootid;

            modalRef.componentInstance.catahnld = this.catahnld;

    }
  
  
  

  
  }

  export class myCat extends editobj {

    title: any;
    parent: any;
  
    override fillable = ['title','parent'];
  }
  
  