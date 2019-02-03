import { Component, OnInit } from '@angular/core';
import { MealsService } from '../../services/meals.service';
import { MathService } from '../../services/math.service';
import { Meal } from '../../models/meal';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-mcdonalds',
    templateUrl: './mcdonalds.component.html',
    styleUrls: ['./mcdonalds.component.css']
})
export class McdonaldsComponent implements OnInit {
    public meals: Meal[]
    public average: number;

    public date: Date;
    public isNight: boolean;
    public discount: number;


    constructor(private pageTitle: Title, private mealsService: MealsService, private mathService: MathService) { }

    ngOnInit() {


        this.discount = 0.4;
        this.date = new Date();


        let hh = this.date.getHours();
        this.isNight = hh >= 20 && hh <= 23;
        console.log(`${this.isNight}`);


        this.pageTitle.setTitle("mcDonalds");


        this.mealsService.getMealsArrAsync((arr) => {

            this.meals = arr;

            this.calculateAvargeForProducts();
        });
    }

    calculateAvargeForProducts() {
        let priceArray: number[] = new Array<number>();
        for (let i = 0; i < this.meals.length; i++) {
            priceArray.push(this.meals[i].price);
        }
        this.average = this.mathService.getAvarage(priceArray);
    }
}









