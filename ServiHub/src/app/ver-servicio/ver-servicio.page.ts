import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-servicio',
  templateUrl: './ver-servicio.page.html',
  styleUrls: ['./ver-servicio.page.scss'],
})
export class VerServicioPage implements OnInit {

  servicio!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.servicio = params.get('servicio')!;
      console.log('Servicio:', this.servicio);
      // Puedes usar this.servicio para cargar datos o lógica específica
    });
  }

}
