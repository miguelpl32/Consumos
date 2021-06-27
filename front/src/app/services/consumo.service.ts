import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Consumo } from '../models/consumo';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {
  url = 'http://localhost:3000/consumos/';

  constructor(private http: HttpClient) { }

  getConsumos(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarConsumo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarConsumo(consumo: Consumo): Observable<any> {
    return this.http.post(this.url, consumo);
  }

  obtenerConsumo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarConsumo(id: string, consumo: Consumo): Observable<any> {
    return this.http.put(this.url + id, consumo);
  }

  uploadFile(formData: FormData): Observable<any> {
    return this.http.post(this.url + 'upload', formData)
  }
}
