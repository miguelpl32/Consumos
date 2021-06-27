import { Component, OnInit } from '@angular/core';
import { Consumo } from 'src/app/models/consumo';
import { ConsumoService } from '../../services/consumo.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-mostrar-consumos',
  templateUrl: './mostrar-consumos.component.html',
  styleUrls: ['./mostrar-consumos.component.css']
})
export class MostrarConsumosComponent implements OnInit {

  listConsumos: Consumo[] = [];
  page: number;

  constructor(private consumoService: ConsumoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerConsumos();


  }

  obtenerConsumos() {
    this.consumoService.getConsumos().subscribe(data => {

      this.listConsumos = data;

    }, error => {
      console.log(error);
    })
  }

  eliminarConsumo(id: any) {
    this.consumoService.eliminarConsumo(id).subscribe(data => {
      this.toastr.error('El consumo ha sido eliminado', 'Consumo Eliminado');
      this.obtenerConsumos();

    }, error => {
      console.log(error);
    })
  }

}
