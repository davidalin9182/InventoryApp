import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms/rooms';
import { environment } from 'src/environments/environment';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner, Wif-fi,Bathroom,Kitchen',
      price: 2000,
      photos: 'https://unsplash.com/photos/JaXs8Tk5Iww',
      checkInTime: new Date('27-Jul-2023'),
      checkOutTime: new Date('27-Aug-2023'),
      raiting: 4.5,
    },
    {
      roomNumber: 2,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner, Wif-fi,Bathroom,Kitchen',
      price: 1000,
      photos: 'https://unsplash.com/photos/JaXs8Tk5Iww',
      checkInTime: new Date('23-Jul-2023'),
      checkOutTime: new Date('23-Aug-2023'),
      raiting: 3.542,
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Wif-fi,Bathroom,Kitchen',
      price: 5000,
      photos: 'https://unsplash.com/photos/JaXs8Tk5Iww',
      checkInTime: new Date('29-Jul-2023'),
      checkOutTime: new Date('29-Aug-2023'),
      raiting: 2.8,
    },
  ];
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) { 
    console.log(this.config.apiEndpoint);
    console.log('Room Service Initialized...');
  }

  getRooms() {
    return this.roomList;
  }
}
