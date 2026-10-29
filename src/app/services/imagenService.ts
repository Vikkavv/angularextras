import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "../../environments/environment.development";
import { fileObj } from "../models/fileObj";

@Injectable()
export class imagenService{

  constructor(private _http: HttpClient) {}

  async insertImagen(imgObj: fileObj): Promise<any>{
    let json = JSON.stringify(imgObj);
    console.log(json);
    let header = new HttpHeaders().set("content-type", "application/json");
    return firstValueFrom(this._http.post<any>(environment.apiFiles + "/api/testingfiles", json, {headers: header}));
  }
}
