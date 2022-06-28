import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GroupsComponent } from './groups.component';

const data= {title: 'abc', description: 'xyz'}

describe('GroupsComponent', () => {
  let component: GroupsComponent;
  let fixture: ComponentFixture<GroupsComponent>;



  beforeEach(async () => {
   
    await TestBed.configureTestingModule({
      declarations: [ GroupsComponent ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: data},
        FormBuilder
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
    

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('form invalid when empty', () => {
    expect(component.addGroupForm.valid).toBeTruthy();
});

it('should mark title as invalid when it has no value', () =>{
  const ctrl=component.addGroupForm.get('title');
  ctrl?.setValue(null);
  fixture.detectChanges();
  expect(ctrl?.invalid).toBeTruthy();
});

it('should mark title as valid when it has value', () =>{
  const ctrl=component.addGroupForm.get('title');
  ctrl?.setValue('test');
  fixture.detectChanges();
  expect(ctrl?.valid).toBeTruthy();
});

 
  it('should return a list if data available', async () => {
    fixture = TestBed.createComponent(GroupsComponent);
    component = fixture.componentInstance;
    expect(component.data.title.length).toBeGreaterThanOrEqual(1);
    expect(component.data.description.length).toBeGreaterThanOrEqual(1);
    
  });

  // it('should return a empty list if no data available', async () => {
  //   fixture = TestBed.createComponent(GroupsComponent);
  //   component = fixture.componentInstance;
  //   expect(component.data.title.length).toEqual(0);
  //   expect(component.data.description.length).toEqual(0);
  // });

});