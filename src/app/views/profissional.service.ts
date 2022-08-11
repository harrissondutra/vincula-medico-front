import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Profissional } from './profissional.model';


@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  baseUrl = "http://localhost:4042/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(profissional: Profissional): Observable<Profissional> {
    return this.http.post<Profissional>(this.baseUrl, profissional).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Profissional[]> {
    return this.http.get<Profissional[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Profissional> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Profissional>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(Profissional: Profissional): Observable<Profissional> {
    const url = `${this.baseUrl}/${Profissional.id}`;
    return this.http.put<Profissional>(url, Profissional).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Profissional> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Profissional>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
