/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { UserFavoriteComponent } from './user-favorite.component';

let component: UserFavoriteComponent;
let fixture: ComponentFixture<UserFavoriteComponent>;

describe('user-favorite component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UserFavoriteComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(UserFavoriteComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});