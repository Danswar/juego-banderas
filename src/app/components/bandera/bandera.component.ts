import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bandera',
  templateUrl: './bandera.component.html',
  styleUrls: ['./bandera.component.css']
})
export class BanderaComponent implements OnInit {

  @Input() infoBandera;
  @Input() fin;
  @Output() eventoClick = new EventEmitter();
  
  mostrarRespuesta: Boolean = false;



  manejarClick(){
    if(this.fin){return;}
    this.eventoClick.emit(this.infoBandera.nombre);
    this.mostrarRespuesta =true;
  }

  constructor() { }

  ngOnInit() {
  }

}
