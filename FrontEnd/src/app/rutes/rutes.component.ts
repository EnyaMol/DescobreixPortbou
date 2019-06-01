import { Component, OnInit } from '@angular/core';
import {Ruta} from '../ruta';
import { ApirutesService } from '../apirutes.service';
import {latLng, tileLayer, Icon, icon, Marker, control} from 'leaflet';

import 'leaflet';
import 'leaflet-routing-machine';
import * as L from 'leaflet';


@Component({
  selector: 'app-rutes',
  templateUrl: './rutes.component.html',
  styleUrls: ['./rutes.component.css']
})
export class RutesComponent implements OnInit {

  constructor(private RutesService: ApirutesService) { }
  private id: number;
  private nom = '';
  private desc = '';
  private dis: number;
  private dif: number;

  public rutas: Ruta[];
  options = { zoom: 9, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.4268926, 3.1038967)};

  options2 = { zoom: 10, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.4268926, 3.1038967)};

  options3 = { zoom: 11, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.4268926, 3.1038967)};

  options4 = { zoom: 10, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.4268926, 3.1038967)};

  options5 = { zoom: 10, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.4268926, 3.1038967)};

  options6 = { zoom: 13, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.4268926, 3.1038967)};

  getJSON() {
    this.RutesService.getJSON().subscribe(data => {
      this.rutas = data.rutas;
      console.log(data.rutas);
    },
    err => {
      alert(err);
    });
  }
  onMapReady1(map) {
    L.Routing.control({
      waypoints: [
        L.latLng(42.4270309, 3.1564453),
        L.latLng(42.4252411, 3.1596103)
      ],
      show: false
    }).addTo(map);
  }
  onMapReady2(map2) {
    L.Routing.control({
      waypoints: [
        L.latLng(42.4268545, 3.1574629),
        L.latLng(42.425726, 3.160263)
      ],
      show: false
    }).addTo(map2);
  }
  onMapReady3(map3) {
    L.Routing.control({
      waypoints: [
        L.latLng(42.426864, 3.1214067),
        L.latLng(42.4383197, 3.1187113)
      ],
      show: false
    }).addTo(map3);
  }
  onMapReady4(map4) {
    L.Routing.control({
      waypoints: [
        L.latLng(42.426864, 3.1214067),
        L.latLng(42.3610187, 3.1421858)
      ],
      show: false
    }).addTo(map4);
  }
  onMapReady5(map5) {
    L.Routing.control({
      waypoints: [
        L.latLng(42.426864, 3.1214067),
        L.latLng(42.4602534, 3.0664663)
      ],
      show: false
    }).addTo(map5);
  }
  onMapReady6(map6) {
    L.Routing.control({
      waypoints: [
        L.latLng(42.4304198, 3.1618997),
        L.latLng(42.427286, 3.158519)
      ],
      show: false
    }).addTo(map6);
  }
  ngOnInit() {
    this.getJSON();
  }
}
