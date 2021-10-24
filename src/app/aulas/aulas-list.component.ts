import { Component, OnInit } from "@angular/core";
import { Aulas } from "./aulas";

@Component({
    selector: 'app-aulas-list',
    templateUrl: './aulas-list.component.html'
})

export class AulasListComponent implements OnInit{
    aulas: Aulas[] = [];

    ngOnInit(): void{
        this.aulas = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                releaseDate: 'December, 2 , 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '',
                price: 49.99,
                code: 'LKL-4094',
                duration: 80,
                rating: 4,
                releaseDate: 'December, 5, 2019'
            }
        ]
    }
}