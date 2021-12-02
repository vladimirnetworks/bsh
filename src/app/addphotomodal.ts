import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    ViewChild,
  } from '@angular/core';
  import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
  
  @Component({
    selector: 'addphoto-modal-content',
    template: `
      <div class="modal-header">
        <h4 class="modal-title">add photo</h4>
        <button type="button" class="btn btn-danger" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div (paste)="onPaste($event)" class="modal-body border border-primary m-2">
      <input type="file" (change)="fileselect($event.target)" />
     
     
  
      <canvas style="max-width:100%;" #mycanv width="480" height="480"></canvas>
  
  <textarea style="width:0px;height:0px;position:absolute;left:-100%"></textarea>
  
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" (click)="ok()">ok</button>
      </div>
    `,
  })
  export class addphotoModalContent implements AfterViewInit {
    @Input() imageblob:any;
  
    @Input() recivehanld:any;
  
    @ViewChild('mycanv') myCanvas!: ElementRef<HTMLCanvasElement>;
  
    imgdata:any;
    constructor(public activeModal: NgbActiveModal) {

      

    }
    ngAfterViewInit(): void {
      /*document.addEventListener('paste', function (e) {
      console.log("paste");
      }, false);
  */
  
      var ctx = this.myCanvas.nativeElement.getContext('2d');
      var img = new Image();
  
      img.onload = function () {

        if (ctx != null) {
           ctx.drawImage(img, 0, 0, 480, 480);
        }

      
      };
  
      img.src = this.imageblob;
    }
  
    ok() {
      this.recivehanld(this.myCanvas.nativeElement.toDataURL('image/jpeg'));
      this.activeModal.close('Close click');
    }
  
    onPaste(e: any) {
      const items = (e.clipboardData || e.originalEvent.clipboardData).items;
      let blob = null;
      for (const item of items) {
        if (item.type.indexOf('image') === 0) {
          blob = item.getAsFile();
         
          var URLObj = window.URL || window.webkitURL;
          var source = URLObj.createObjectURL(blob)
  
          console.log(source);
  
          var ctx = this.myCanvas.nativeElement.getContext('2d');
  
         
          var img = new Image();
  
          img.onload = function () {

            if (ctx != null) {

          ctx.drawImage(img, 0, 0, 480, 480);

            }
          };
  
          img.src = source;
          
        }
      }
    }
  
  
  
    fileselect(i:any) {
     // this.open(obj, URL.createObjectURL(i.files[0]));
  
     var ctx = this.myCanvas.nativeElement.getContext('2d');
  
         
          var img = new Image();
  
          img.onload = function () {

            if (ctx != null) {
                ctx.drawImage(img, 0, 0, 480, 480);
            }
        //    
          };
  
          img.src = URL.createObjectURL(i.files[0]);
  
  
    }
  
  
  }
  