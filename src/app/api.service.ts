import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface apidata {
  data: any;
}



@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

apiurl = 'https://www.behkiana.ir/api/';

  logo :any;

  get(path:string) {
    console.log(this.apiurl + path);
    this.logo = this.apiurl + path;
    return this.http.get<apidata>(this.apiurl + path);
  }

  post(path:string, body:any) {
    console.log(this.apiurl + path + ',,' + JSON.stringify(body));
    return this.http.post<apidata>(this.apiurl + path, body);
  }

  put(path:string, body:any) {
    console.log(this.apiurl + path + ',,' + JSON.stringify(body));
    return this.http.put<apidata>(this.apiurl + path, body);
  }


  delete(path:string, body:any) {
    console.log(this.apiurl + path + ',,' + JSON.stringify(body));
    return this.http.delete<apidata>(this.apiurl + path, body);
  }

}