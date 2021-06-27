import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Consumo } from 'src/app/models/consumo'
import { ConsumoService } from '../../services/consumo.service';


@Component({
  selector: 'app-crear-consumo',
  templateUrl: './crear-consumo.component.html',
  styleUrls: ['./crear-consumo.component.css']
})
export class CrearConsumoComponent implements OnInit {

  consumoForm: FormGroup;
  titulo = "Crear Consumo";
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private consumoService: ConsumoService,
    private aRouter: ActivatedRoute
  ) {

    this.consumoForm = this.fb.group({
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      consumo: ['', Validators.required],
      precioKwh: ['', Validators.required],
      costeHora: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editarConsumo();
  }

  agregarConsumo() {
    console.log(this.consumoForm);
    console.log(this.consumoForm.get('hora').value);

    const CONSUMO: Consumo = {
      fecha: this.consumoForm.get('fecha').value,
      hora: this.consumoForm.get('hora').value,
      consumo: this.consumoForm.get('consumo').value,
      precioKwh: this.consumoForm.get('precioKwh').value,
      costeHora: this.consumoForm.get('costeHora').value,
    };

    if (this.id !== null) {
      // editamos consumo
      this.consumoService.editarConsumo(this.id, CONSUMO).subscribe(data => {
        this.toastr.info('El consumo ha sido actualizado', ' Consumo Actualizado!');
        this.router.navigate(['/']);

      }, error => {
        console.log(error);
        this.consumoForm.reset();
      })

    } else {

      // agregamos consumo

      this.consumoService.guardarConsumo(CONSUMO).subscribe(data => {
        this.toastr.success('El consumo ha sido registrado', ' Consumo Registrado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.consumoForm.reset();
      })

    }

  };

  editarConsumo() {
    if (this.id !== null) {
      this.titulo = 'Editar Consumo';
      this.consumoService.obtenerConsumo(this.id).subscribe(data => {

        this.consumoForm.setValue({
          fecha: data.fecha.split('T')[0],
          hora: data.hora,
          consumo: data.consumo,
          precioKwh: data.precioKwh,
          costeHora: data.costeHora
        })
      })

    }
  }

};
