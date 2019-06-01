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
  private lat = ' ';
  private lon = ' ';
  private img = ' ';

  public punts: Punt[];

  constructor(private PuntsService: ApipuntsService) { }

  options = { zoom: 15, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.4244979, 3.1556693)};

  options2 = { zoom: 15, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.4255216, 3.1570747)};

  options3 = { zoom: 15, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.4261699, 3.1557389)};

  options4 = { zoom: 15, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.4264139, 3.1585761)};

  options5 = { zoom: 15, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.4261338, 3.1599277)};

  options6 = { zoom: 15, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.4266985, 3.1613669)};

  options7 = { zoom: 15, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.4266985, 3.1613669)};

  options8 = { zoom: 15, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.4272971, 3.159271)};

  options9 = { zoom: 15, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.430377, 3.164086)};

  options10 = { zoom: 15, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.434873, 3.159339)};

  options11 = { zoom: 15, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.429371, 3.160990)};

  options12 = { zoom: 15, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.425156, 3.166163)};

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
    L.marker([42.4244979, 3.1556693]).addTo(map);
  }
  onMapReady2(map2) {
    L.marker([42.4255216, 3.1570747]).addTo(map2);
  }
  onMapReady3(map3) {
    L.marker([42.4261699, 3.1557389]).addTo(map3);
  }
  onMapReady4(map4) {
    L.marker([42.4264139, 3.1585761]).addTo(map4);
  }
  onMapReady5(map5) {
    L.marker([42.4261338, 3.1599277]).addTo(map5);
  }
  onMapReady6(map6) {
    L.marker([42.4266985, 3.1613669]).addTo(map6);
  }
  onMapReady7(map7) {
    L.marker([42.4266985, 3.1613669]).addTo(map7);
  }
  onMapReady8(map8) {
    L.marker([42.427405, 3.160767]).addTo(map8);
  }
  onMapReady9(map9) {
    L.marker([42.430377, 3.164086]).addTo(map9);
  }
  onMapReady10(map10) {
    L.marker([42.434873, 3.159339]).addTo(map10);
  }
  onMapReady11(map11) {
    L.marker([42.429371, 3.160990]).addTo(map11);
  }
  onMapReady12(map12) {
    L.marker([42.425156, 3.166163]).addTo(map12);
  }
  ngOnInit() {
    this.getJSON();
  }

}
