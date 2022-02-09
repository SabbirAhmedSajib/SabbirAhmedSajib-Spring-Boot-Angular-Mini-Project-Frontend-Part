import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../ApiService/api.service';
import { ReleaseModel } from '../drawer-release/drawer-release.component.model'

@Component({
  selector: 'app-drawer-release-update-or-get',
  templateUrl: './drawer-release-update-or-get.component.html',
  styleUrls: ['./drawer-release-update-or-get.component.css']
})
export class DrawerReleaseUpdateOrGetComponent implements OnInit {

  ReleaseModeloObj: ReleaseModel = new ReleaseModel();

  formValue !: FormGroup

  showExecute !: boolean;
  showUpdate !: boolean;
  locker:any;
  Drawer:any;


  constructor(private formBuilder : FormBuilder, private apiservice : ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      lckrid: [''],
      drwrid:[''],
      actnum:[''],
      acttit:[''],
      remarks:[''],
      reldate:[''],
      paystat:[''],   
      dueamt : [''],
      prdcod :[''],
      saleval : [''],
      marketval : [''],
      cautionamt : [''],   
      expdate : [''],
      relid:[''],
      cuscod:[''],
      });
  }

  ClearPage(){
    this.formValue.reset();
  }


  onKeyPress(event : any){
    console.log("Event Succefully");
    this.ReleaseModeloObj.relid=this.formValue.value.relid;
    
    this.apiservice.GetByIdRelease(this.ReleaseModeloObj.relid)
    .subscribe(res=>{
      this.getOnForm(res);
      console.log(res)
    },
    err=>{
      alert("No Data Found!");
    })
  }
  getOnForm(res:any){
    this.formValue.controls['lckrid'].patchValue(res.lckrid);
    this.formValue.controls['drwrid'].patchValue(res.drwrid);
    this.formValue.controls['actnum'].patchValue(res.actnum);
    this.formValue.controls['paystat'].patchValue(res.paystat);
    this.formValue.controls['dueamt'].patchValue(res.dueamt);
    this.formValue.controls['reldate'].patchValue(res.reldate);
    this.formValue.controls['remarks'].patchValue(res.remarks);
  }


  updateRelease(){
    this.ReleaseModeloObj.relid=this.formValue.value.relid;
    this.ReleaseModeloObj.lckrid=this.formValue.value.lckrid;
    this.ReleaseModeloObj.drwrid=this.formValue.value.drwrid;

    this.ReleaseModeloObj.actnum=this.formValue.value.actnum;
    this.ReleaseModeloObj.paystat=this.formValue.value.paystat;

    this.ReleaseModeloObj.dueamt=this.formValue.value.dueamt;

    this.ReleaseModeloObj.reldate=this.formValue.value.reldate;
    this.ReleaseModeloObj.remarks=this.formValue.value.remarks;


    this.apiservice.UpdateByIdRelease(this.ReleaseModeloObj.relid, this.ReleaseModeloObj)
    .subscribe(res=>{
      alert("Update Successfully")
      let ref=document.getElementById("cancel")
      ref?.click();
      this.formValue.reset();
    },
      err=>{
        alert("Something wrong");
      })
  }
}
