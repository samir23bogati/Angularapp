import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [RouterOutlet, RouterModule],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css'
})
export class ProductComponent {

    public products = [
        {
            id: 1001,
            title: "iPhone",
            content: 'This is apple product'
            ,
        },
        {
            id: 1002,
            title: "Galaxy 24 Ultra",
            content: 'This is samsung product'
            ,
        },
        {
            id: 1003,
            title: "OPP 101",
            content: 'This is OPPO product',
        }
    ];

    constructor(private httpClient: HttpClient) {
        console.log(this.products);
    }


}