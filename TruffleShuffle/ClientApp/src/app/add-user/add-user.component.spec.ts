/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AddUserComponent } from './add-user.component';

let component: AddUserComponent;
let fixture: ComponentFixture<AddUserComponent>;

describe('addUser component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddUserComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AddUserComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});