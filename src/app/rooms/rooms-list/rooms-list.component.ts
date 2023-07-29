import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges,OnDestroy {

  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';

  //ng OnChanges can be applied if theres an Input propiety

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase(); 
    }
  }
  
  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room : RoomList) {
    this.selectedRoom.emit(room); 
  }
  //on destory is called when an component is removed from the DOM
  ngOnDestroy(): void {
   
  }
}
