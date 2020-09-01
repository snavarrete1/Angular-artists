import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-artists-home',
  templateUrl: './artists-home.component.html',
  styleUrls: ['./artists-home.component.scss']
})
export class ArtistsHomeComponent implements OnInit {
  artistsDescriptionDisplay;

  artistsForm = new FormGroup({
    artistsName: new FormControl(''),
    artistsDescription: new FormControl(''),
    artistsCategory: new FormControl('')
  })


  onSubmit(){
    console.log(`${this.artistsForm.value.artistsName}`)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
