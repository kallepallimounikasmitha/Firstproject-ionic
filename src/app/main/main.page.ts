import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import {Plugins, CameraResultType, CameraSource, Camera} from '@capacitor/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private dom: DomSanitizer) { 

  }
  
  
  
  formdata;
  un;
  img;
  imagepath;
  imageUrl;

  ngOnInit() {
    this.formdata=   JSON.parse(localStorage.getItem('form'));
    // this.img = JSON.parse(localStorage.getItem('image'));
    // console.log(this.img);

    // this.imageUrl = 'data:image/jpeg;base64,' + this.img.base64string;
   
    // this.image = this.dom.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + this.img.base64String); 

    this .un = this.formdata.fName;
  }
  image: SafeResourceUrl;
  async onClick(){
    
    const { Camera } =Plugins;
    const result = await Camera.getPhoto({
      quality: 100,
      allowEditing : false,
      source : CameraSource.Camera,
      resultType : CameraResultType.DataUrl
    });


//  this.image = this.dom.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + result.base64String);   
 //this.image = this.dom.bypassSecurityTrustResourceUrl(result && result.dataUrl);

    localStorage.setItem('image', JSON.stringify(result));
    


  }

  transform(){
    this.img = JSON.parse(localStorage.getItem('image'));
    console.log(this.img.dataUrl);

    return this.dom.bypassSecurityTrustResourceUrl(this.img.dataUrl);

  }

}

