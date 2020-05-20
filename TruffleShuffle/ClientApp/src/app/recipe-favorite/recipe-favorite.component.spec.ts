/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { RecipeFavoriteComponent } from './recipe-favorite.component';

let component: RecipeFavoriteComponent;
let fixture: ComponentFixture<RecipeFavoriteComponent>;

describe('recipeFavorite component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RecipeFavoriteComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(RecipeFavoriteComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});