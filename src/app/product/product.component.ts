import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    public products= [
      {
        id:1001,
        title:"iphone",
        content:'This is apple Product'
        ,
      },
      {
        id:1002,
        title:"hiphoohone",
        content:'This is apple Product'
        ,
      },
      {
        id:1003,
        title:"cellhone",
        content:'This is samirs product',
      }
    ];
    constructor(private httpClient: HttpClient){
      console.log(this.products);
    }
      
    }
