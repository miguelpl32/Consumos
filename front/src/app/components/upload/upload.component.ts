import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumoService } from '../../services/consumo.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadedFiles: [];

  constructor(private consumoService: ConsumoService,
    private router: Router,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
  }

  onUpload() {


    let formData = new FormData();


    if (this.uploadedFiles?.length > 0) {

      for (let i = 0; i < this.uploadedFiles.length; i++) {

        formData.append("uploads", this.uploadedFiles[i])

      }

      // llamar al Service
      this.consumoService.uploadFile(formData).subscribe((res) => {
        this.toastr.info('Archivo subido correctamente!', ' Archivo subido!');
        this.router.navigateByUrl('/');
      })

    } else {
      throw console.error("No hay archivo");
      this.toastr.error('El archivo no cargado!', ' Archivo no cargado!');
    }
  }

  onFileChange(element) {
    this.uploadedFiles = element.target.files;
  }

}
