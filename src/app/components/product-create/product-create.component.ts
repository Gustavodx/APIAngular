import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {
  alumno = {
    nombre: '',
    apePaterno: '',
    apeMaterno: '',
    direccion: '',
    telefono: '',
    fecIngreso: '',
    escuela: {
    idEscuela: 1
    }
  };
  submitted = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  createAlumno(): void {
    const data = {
      nombre: this.alumno.nombre,
      apePaterno: this.alumno.apePaterno,
      apeMaterno: this.alumno.apeMaterno,
      direccion: this.alumno.direccion,
      telefono: this.alumno.telefono,
      fecIngreso: this.alumno.fecIngreso,
      escuela: {
        idEscuela: this.alumno.escuela.idEscuela
      }
    };

    this.productService.create(data)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.submitted = true;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  newAlumno(): void {
    this.submitted = false;
    this.alumno = {
      nombre: '',
      apePaterno: '',
      apeMaterno: '',
      direccion: '',
      telefono: '',
      fecIngreso: '',
      escuela: {
        idEscuela: 1
      }
    };
  }
}