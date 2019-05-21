import { Component, OnInit } from '@angular/core';
import { Punt } from '../punt';
import { ApipuntsService } from '../apipunts.service';

@Component({
  selector: 'app-punts',
  templateUrl: './punts.component.html',
  styleUrls: ['./punts.component.css']
})
export class PuntsComponent implements OnInit {

  private nom = "";
  private desc = "";
  private lat: number;
  private lon: number;




  private punts: Punt[];
  constructor(private PuntsService : ApipuntsService) { }

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
  ngOnInit() {
    this.getJSON();
  }

}
