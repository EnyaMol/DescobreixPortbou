import { Component, OnInit } from '@angular/core';
import { Punt } from '../punt';
import { ApipuntsService } from '../apipunts.service';
import { latLng, tileLayer} from 'leaflet';
import 'leaflet';
import 'leaflet-routing-machine';
import * as L from 'leaflet';

@Component({
  selector: 'app-punts',
  templateUrl: './punts.component.html',
  styleUrls: ['./punts.component.css']
})
export class PuntsComponent implements OnInit {

  private nom = ' ';
  private desc = ' ';
  private lat: number;
  private lon: number;

  private punts: Punt[];

  constructor(private PuntsService: ApipuntsService) { }

  options = { zoom: 10, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.2642651, 2.9477342)};

  options2 = { zoom: 13, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.2642651, 2.9477342)};

  options3 = { zoom: 13, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.2642651, 2.9477342)};

  options4 = { zoom: 13, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.2642651, 2.9477342),
  instructions : false};

  options5 = { zoom: 13, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.2642651, 2.9477342)};

  options6 = { zoom: 13, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.2642651, 2.9477342)};

  options7 = { zoom: 13, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.2642651, 2.9477342)};

  options8 = { zoom: 13, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.2642651, 2.9477342)};

  options9 = { zoom: 13, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.2642651, 2.9477342)};

  options10 = { zoom: 13, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.2642651, 2.9477342)};

  options11 = { zoom: 13, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.2642651, 2.9477342)};

  options12 = { zoom: 13, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.2642651, 2.9477342)};

  getJSON() {
    this.PuntsService.getJSON().subscribe(data => {
      this.punts = data.punts;
      console.log(data.punts);
    },
    err => {
      alert(err);
    }
    );
  }

   onMapReady1(map) {
    L.Routing.control({
      waypoints: [
        L.latLng(42.2642651, 2.9477342)
      ],
      show: false
    }).addTo(map);
    map.dragging.disable();
  }
  onMapReady2(map2) {
    L.Routing.control({
      waypoints: [
        L.latLng(39.86232, -4.0694704)
      ],
      show: false
    }).addTo(map2);
  }
  onMapReady3(map3) {
    L.Routing.control({
      waypoints: [
        L.latLng(39.86232, -4.0694704)
      ],
      show: false
    }).addTo(map3);
  }
  onMapReady4(map4) {
    L.Routing.control({
      waypoints: [
        L.latLng(39.86232, -4.0694704)
      ],
      show: false
    }).addTo(map4);
  }
  onMapReady5(map5) {
    L.Routing.control({
      waypoints: [
        L.latLng(39.86232, -4.0694704)
      ],
      show: false
    }).addTo(map5);
  }
  onMapReady6(map6) {
    L.Routing.control({
      waypoints: [
        L.latLng(39.86232, -4.0694704)
      ],
      show: false
    }).addTo(map6);
  }
    onMapReady7(map7) {
      L.Routing.control({
        waypoints: [
          L.latLng(39.86232, -4.0694704)
        ],
        show: false
      }).addTo(map7);
    }
    onMapReady8(map8) {
      L.Routing.control({
        waypoints: [
          L.latLng(39.86232, -4.0694704)
        ],
        show: false
      }).addTo(map8);
    }
    onMapReady9(map9) {
      L.Routing.control({
        waypoints: [
          L.latLng(39.86232, -4.0694704)
        ],
        show: false
      }).addTo(map9);
    }
    onMapReady10(map10) {
      L.Routing.control({
        waypoints: [
          L.latLng(39.86232, -4.0694704)
        ],
        show: false
      }).addTo(map10);
    }
    onMapReady11(map11) {
      L.Routing.control({
        waypoints: [
          L.latLng(39.86232, -4.0694704)
        ],
        show: false
      }).addTo(map11);
    }
    onMapReady12(map12) {
    L.Routing.control({
      waypoints: [
        L.latLng(39.86232, -4.0694704)
      ],
      show: false
    }).addTo(map12);
  }
  ngOnInit() {
    this.getJSON();
  }

}
