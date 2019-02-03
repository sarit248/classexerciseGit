import { Injectable } from '@angular/core';
import { Meal } from '../models/meal';

@Injectable({
    providedIn: 'root'
})
export class MealsService {

    constructor() { }

    public getMealsArrAsync(callback: (arr: Meal[]) => void): void {

        setTimeout(function () {
            let diffrentMeal= new Array<Meal>();
            diffrentMeal.push(new Meal("Children Meal", 40, "/assets/images/childrenMeal.jpg"));
            diffrentMeal.push(new Meal("McNuggets", 50, "/assets/images/mcnuggets.jpg"));
            diffrentMeal.push(new Meal("McRoyal", 60, "/assets/images/mcroyal.jpg"));
            callback(diffrentMeal);
        }, 4000);
        console.log("End of getMealsArrAsync");
    }
    
}


