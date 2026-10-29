import { Component, ElementRef, ViewChild } from '@angular/core';
import { imagenService } from '../../services/imagenService';
import { fileObj } from '../../models/fileObj';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

  @ViewChild("imagen") imagenInput!: ElementRef;
  @ViewChild("nombre") nombreInput!: ElementRef;

  constructor(private _service: imagenService) {}

  async sendImage(): Promise<void> {
    let img:File = this.imagenInput.nativeElement.files[0];
    let reader = new FileReader();
    let img64: string;
    reader.addEventListener("load", async () => {
      img64 = reader.result+"";
      let imgObj = new fileObj(this.nombreInput.nativeElement.value, img64)
      await this._service.insertImagen(imgObj);
    })

    reader.readAsDataURL(img);
  }

}
