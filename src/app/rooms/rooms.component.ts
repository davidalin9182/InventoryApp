import { AfterViewChecked, AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from '../services/rooms.service';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit ,AfterViewInit, AfterViewChecked{
 
 

  hotelName = "David's Hotel";
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = "Room List";

  roomList: RoomList[] = [];
  //MAKE IT PRIVATE USUALY
  constructor(private roomsService: RoomsService) {

  }

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
  };
  selectedRoom!: RoomList;

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  //multiple insatnces of a component
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

 

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";
    
    this.headerChildrenComponent.last.title = "Last Title";
  }
  ngAfterViewChecked(): void {
    
  }
  //so if its false it becomes true and so on
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room : RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room : RoomList = {
      roomNumber:4,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner, Wif-fi,Bathroom,Kitchen',
      price: 2000,
      photos: 'https://unsplash.com/photos/JaXs8Tk5Iww',
      checkInTime: new Date('27-Jul-2023'),
      checkOutTime: new Date('27-Aug-2023'),
      raiting: 4.5,  
    };
    // this.roomList.push(room);
    // this.roomList = [...this.roomList, room];
  }
  



}
