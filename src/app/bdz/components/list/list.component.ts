import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Trunk',
      power: 10,
    },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteId(id?: string): void {
    if (!id) return;
    //emitir el ID del personaje
    console.log(id);
    this.onDelete.emit(id);
  }
}
