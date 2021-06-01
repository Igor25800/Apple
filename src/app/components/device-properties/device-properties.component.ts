import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INavs } from 'src/app/shared/interfaces/category-navs.interfaces';
import { NavsService } from 'src/app/shared/services/navs/navs.service';

@Component({
  selector: 'app-device-properties',
  templateUrl: './device-properties.component.html',
  styleUrls: ['./device-properties.component.scss']
})
export class DevicePropertiesComponent implements OnInit {

  arrNav:Array<INavs>
  
  formGroup: FormGroup;

  controls = [];

  form :FormGroup

  constructor(
    public activeModal: MatDialogRef<DevicePropertiesComponent> ,
    private formBolider :FormBuilder,
    private navsServices : NavsService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: {form: any}
    ) { }
  
  ngOnInit(): void {
    this.getNav()

    this.formGroup = this.formBolider.group({
     select: new FormControl('')
    })

    this.form =  this.formBolider.group({
      control: new FormControl('' ,Validators.required),
      label: new FormControl('' ,Validators.required),
    
    })
    
  }

  getNav():void {
    this.navsServices.getNavs().then(res => {
      // console.log(res);
      
      this.arrNav = res
    })
  }


  addDetali(){
    // this.navsServices.$obj.next(this.formGroup.value)
    // this.activeModal.close()
    this.activeModal.close(this.form.value)
    // console.log(this.data.form);
    
    
  
    const {select: id} = this.formGroup.value;
   console.log(id);
   
    
    const nav = this.arrNav.find(el=>el.id ===id);

    const body = {...nav, props: {...this.formGroup.value}};
    console.log(this.arrNav);
    
    
    
    // this.navsServices.updateNavs(`navs ${id}` , body).then(res => {
    //   this.navsServices.getNavs()
    // })
   
   
  }

}
