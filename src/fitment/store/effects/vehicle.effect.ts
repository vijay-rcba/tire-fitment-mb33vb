import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { catchError, map, switchMap } from "rxjs/operators";

import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import {
  LOAD_MAKES,
  LOAD_MODELS,
  LOAD_TRIM,
  LOAD_YEARS,
  LoadYearsFail,
  LoadYearsSuccess,
  LoadMakesFail,
  LoadMakesSuccess,
  LoadModelsFail,
  LoadModelsSuccess,
  LoadTrimFail,
  LoadTrimSuccess
} from "../actions/vehicle.action";
import { of } from "rxjs";

@Injectable()
export class VehicleEffect {
  url = "https://6080be3273292b0017cdbf2a.mockapi.io/";
  constructor(private http: HttpClient, private actions$: Actions) {}

  @Effect()
  loadYears$: Observable<Action> = this.actions$.pipe(
    ofType(LOAD_YEARS),
    switchMap(action => {
      const httpOptions = {
        headers: { "Content-Type": "application/json" },
        params: {}
      };
      return this.http.get(this.url + "years", httpOptions).pipe(
        map((res: any) => {
          return new LoadYearsSuccess({
            years: res.year,
            loaded: true,
            loading: false
          });
        }),
        catchError(error => of(new LoadYearsFail(error)))
      );
    })
  );

  @Effect()
  loadMakes$: Observable<Action> = this.actions$.pipe(
    ofType(LOAD_MAKES),
    switchMap(action => {
      const httpOptions = {
        headers: { "Content-Type": "application/json" },
        params: {}
      };
      return this.http.get(this.url + "makes", httpOptions).pipe(
        map((res: any) => {
          return new LoadMakesSuccess({
            make: res.make,
            loaded: true,
            loading: false
          });
        }),
        catchError(error => of(new LoadMakesFail(error)))
      );
    })
  );

  @Effect()
  loadModels$: Observable<Action> = this.actions$.pipe(
    ofType(LOAD_MODELS),
    switchMap(action => {
      const httpOptions = {
        headers: { "Content-Type": "application/json" },
        params: {}
      };
      return this.http.get(this.url + "models", httpOptions).pipe(
        map((res: any) => {
          return new LoadModelsSuccess({
            models: res.model,
            loaded: true,
            loading: false
          });
        }),
        catchError(error => of(new LoadModelsFail(error)))
      );
    })
  );

  @Effect()
  loadTrims$: Observable<Action> = this.actions$.pipe(
    ofType(LOAD_TRIM),
    switchMap(action => {
      const httpOptions = {
        headers: { "Content-Type": "application/json" },
        params: {}
      };
      return this.http.get(this.url + "trims", httpOptions).pipe(
        map((res: any) => {
          return new LoadTrimSuccess({
            trims: res.trim,
            loaded: true,
            loading: false
          });
        }),
        catchError(error => of(new LoadTrimFail(error)))
      );
    })
  );

  // @Effect()
  // loadOptions$: Observable<Action> = this.actions$.pipe(
  //   ofType(LOAD_YEARS),
  //   switchMap(action => {
  //     return this.http.get(this.url + "options").pipe(
  //       map((res: any) => {
  //         return new LoadYearsSuccess({
  //           options: res.option,
  //           loaded: true,
  //           loading: false
  //         });
  //       }),
  //       catchError(error => of(new LoadYearsFail(error)))
  //     );
  //   })
  // );
}
