import { Component, OnInit } from '@angular/core';
import {Ruta} from "../ruta";
import { ApirutesService } from '../apirutes.service';

@Component({
  selector: 'app-rutes',
  templateUrl: './rutes.component.html',
  styleUrls: ['./rutes.component.css']
})
export class RutesComponent implements OnInit {

  private nom = "";
  private desc = "";
  private dis: number;
  private dif: number;

  private rutas: Ruta[];
  constructor(private RutesService : ApirutesService) { }

  getJSON() {
    this.RutesService.getJSON().subscribe(data => {
      this.rutas = data.rutas;
    },
    err => {
      alert(err);
    }
    );
  }

  ngOnInit() {
    this.getJSON();
  }

}
