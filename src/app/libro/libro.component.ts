import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { Libro } from '../domain/Libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  @Input() libro: Libro;
  @Output('delLibro') delLibro= new EventEmitter<Libro>(); // alias
  @Output('editLibro') editLibro= new EventEmitter<Libro>(); // alias
  edit : boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  OnDelLibro(libro:Libro){
    console.log("log da sottocomponente",libro);
    this.delLibro.emit(libro);

  }
  
  OnEditLibro(libro){
    this.editLibro.emit(libro);
  }


  OnAbilitaEditing(titolo){
    this.edit=!this.edit;

    titolo.focus();
  }
}
