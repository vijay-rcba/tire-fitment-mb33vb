import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { FitmentState } from "../store";
import {
  LoadYears,
  LoadMakes,
  LoadModels,
  LoadTrim
} from "../store/actions/vehicle.action";
@Component({
  selector: "app-fitment-container",
  templateUrl: "./fitment-container.component.html",
  styleUrls: ["./fitment-container.component.css"]
})
export class FitmentContainerComponent implements OnInit {
  fitment$: Observable<FitmentState>;
  years$: string[];
  makes$: string[];
  models$: string[];
  trims$: string[];
  selectedYear: string = "";
  selectedMake: string = "";
  selectedModel: string = "";
  selectedTrim: string = "";
  isRecordsNotAvailable: boolean = false;
  // import the store into the constructor
  constructor(private store: Store<FitmentState>) {}

  ngOnInit() {
    this.store
      .select(state => state)
      .subscribe(data => {
        if (data.vehicle) {
          this.years$ = data.vehicle.years;
          this.makes$ = data.vehicle.make;
          this.models$ = data.vehicle.models;
          this.trims$ = data.vehicle.trims;
        }
      });
  }

  getYears() {
    this.makes$ = [];
    this.models$ = [];
    this.trims$ = [];
    const action = new LoadYears();
    this.store.dispatch(action);

    // dispatch an action to get array of years

    // Year
    // https://6080be3273292b0017cdbf2a.mockapi.io/years
  }

  getMake(year) {
    this.selectedYear = year;
    console.log("year", year);
    const action = new LoadMakes();
    this.store.dispatch(action);
    this.models$ = [];
    this.trims$ = [];
  }

  getModel(make) {
    this.selectedMake = make;
    console.log("make", make);
    const action = new LoadModels();
    this.store.dispatch(action);
    this.trims$ = [];
  }

  getTrim(model) {
    this.selectedModel = model;
    console.log("model", model);
    const action = new LoadTrim();
    this.store.dispatch(action);
    this.isRecordsNotAvailable = this.trims$.length === 0;
  }

  // Make with year (2021)
  // https://6080be3273292b0017cdbf2a.mockapi.io/makes

  // Model with year and make (Acura)
  // https://6080be3273292b0017cdbf2a.mockapi.io/models

  // Trim with year, make, model (RDX)
  // https://6080be3273292b0017cdbf2a.mockapi.io/trim
}
