import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../ApiService/api.service';
import { ReleaseModel } from './drawer-release.component.model';

@Component({
  selector: 'app-drawer-release',
  templateUrl: './drawer-release.component.html',
  styleUrls: ['./drawer-release.component.css']
})
export class DrawerReleaseComponent implements OnInit {

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
    cuscod :[''],
    });

    this.apiservice.GetLockerInfo()
    .subscribe(res =>{
      this.locker=res;
      console.log("Hello")
      console.log(this.locker)
    });

    this.apiservice.GetDrawerInfo()
    .subscribe(res =>{
      this.Drawer=res;
      console.log(this.Drawer)
    })
  }

  onKeyPress(event : any){
    console.log("Event Succefully");
    this.ReleaseModeloObj.actnum=this.formValue.value.actnum;
    
    this.apiservice.GetDrawerAllocateInfoByAccountNo(this.ReleaseModeloObj.actnum)
    .subscribe(res=>{
      this.getOnForm(res);
      console.log(res)
    },
    err=>{
      alert("No Data Found!");
    })
  }
  getOnForm(res:any){
    this.formValue.controls['acttit'].patchValue(res.acttit);
    this.formValue.controls['prdcod'].patchValue(res.prdcod);

    this.formValue.controls['saleval'].patchValue(res.saleval);
    this.formValue.controls['marketval'].patchValue(res.marketval);

    this.formValue.controls['cautionamt'].patchValue(res.cautionamt);
    this.formValue.controls['reldate'].patchValue(res.expdate);
    this.formValue.controls['remarks'].patchValue(res.remarks);
    this.formValue.controls['cuscod'].patchValue(res.cuscod);
  }

  postRelease(){
    
    this.ReleaseModeloObj.lckrid=this.formValue.value.lckrid;
    this.ReleaseModeloObj.drwrid=this.formValue.value.drwrid;

    this.ReleaseModeloObj.actnum=this.formValue.value.actnum;
    this.ReleaseModeloObj.paystat=this.formValue.value.paystat;

    this.ReleaseModeloObj.dueamt=this.formValue.value.dueamt;

    this.ReleaseModeloObj.reldate=this.formValue.value.reldate;
    this.ReleaseModeloObj.remarks=this.formValue.value.remarks;

    this.apiservice.PostCustomerReleaseInfo(this.ReleaseModeloObj)
    .subscribe(res =>{
      console.log(res)
      alert("Add Successfully");
      this.formValue.reset();
    },
    err=>{
      alert("Something Wrong");
    })
  }

  ClearPage(){
    this.formValue.reset();
  }


}

