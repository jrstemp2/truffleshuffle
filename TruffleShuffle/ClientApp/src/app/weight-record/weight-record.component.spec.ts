/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { WeightRecordComponent } from './weight-record.component';

let component: WeightRecordComponent;
let fixture: ComponentFixture<WeightRecordComponent>;

describe('weight-record component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ WeightRecordComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(WeightRecordComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});