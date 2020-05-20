/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { RecipeDetailsComponent } from './recipe-details.component';

let component: RecipeDetailsComponent;
let fixture: ComponentFixture<RecipeDetailsComponent>;

describe('recipeDetails component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RecipeDetailsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(RecipeDetailsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});