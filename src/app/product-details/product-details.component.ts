import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-details',
    standalone: true,
    imports: [],
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
    public datas = [
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
    public product: any;
    public product_id: number = 0;
    constructor(private router: ActivatedRoute) {
    }

    ngOnInit() {
        this.router.params.subscribe(params => {
            this.product_id = params['id'];

            this.datas.forEach(item => {
                if (params['id'] == item.id) {
                    this.product = item;
                }
            });
        })
    }
}