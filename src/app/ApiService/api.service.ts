import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  GetLockerInfo(){
    return this.http.get("http://localhost:8888/api/LSM/Locker/Get");
  }

  GetDrawerInfo(){
    return this.http.get("http://localhost:8888/api/LSM/Drawer/Get");
  }

  GetDrawerAllocateInfoByAccountNo(actnum : any){
    return this.http.get("http://localhost:8888/api/LSM/DrawerAllocate/"+actnum);
  }


  PostCustomerReleaseInfo(data:any){
    return this.http.post<any>("http://localhost:8888/api/LSM/DrawerRelease/Create", data)
      .pipe(map((res:any)=> {
        return res;
      }))
  }

  GetByIdRelease(relid : any){
    return this.http.get("http://localhost:8888/api/LSM/DrawerRelease/"+relid);   
  }


  UpdateByIdRelease(relid : any, data : any){
    return this.http.put<any>("http://localhost:8888/api/LSM/DrawerRelease/"+relid,data)
    .pipe(map((res:any)=> {
      return res;
    }))

  }

  
  GetDrawerRelease(){
    return this.http.get("http://localhost:8888/api/LSM/DrawerRelease/get");   
  }
}