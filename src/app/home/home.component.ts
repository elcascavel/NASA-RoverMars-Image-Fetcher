import { Component, OnInit } from '@angular/core';
import { NasaService } from "../nasa.service";
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public responsePhotos: Object;
  public length: number;

  onChangePage(page: PageEvent) {
    this.getPhotos(page.pageIndex + 1);
  }

  constructor(private nasaApi: NasaService) { }

  ngOnInit() {
    this.nasaApi.getAllPhotos()
      .subscribe((response) => {
        this.length = response.photos.length;
      });
    this.getPhotos(1);
  }

  getPhotos(page: number) {
    this.nasaApi.getPhotos(page).subscribe((response) => {
      this.responsePhotos = response;
      console.log(response);
    });
  }
}
