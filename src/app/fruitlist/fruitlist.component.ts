import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  fruitlistdata = inject(FruitlistdataService);
  constructor() { }

  addComments(comment:string, index:number) {
    this.fruitlistdata.addComments(comment, index);
    };
  
  nameLog(name:string) {
    console.log(name);
  }

  howItWorks = 'fine';
  fontColorGood = 'green';
  fontColorBad = 'red';



}

