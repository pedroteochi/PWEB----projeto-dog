import { DogService } from './../dog.service';
import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit{
  constructor(private service: DogService) { };
  dog?: Dog;

  ngOnInit(): void {
    this.onCLick();
  }


   onCLick(){
     this.service.listar().subscribe(dog => this.dog = dog)
   }

}
