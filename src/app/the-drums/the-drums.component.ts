import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-the-drums',
  templateUrl: './the-drums.component.html',
  styleUrls: ['./the-drums.component.scss']
})
export class TheDrumsComponent implements OnInit {
  artistsDescriptionDisplay;
  artistsNameDisplay;
  artistsCategoryDisplay;

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
