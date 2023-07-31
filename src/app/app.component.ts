import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'InventoryApp';
  role ='Admin';

  // constructor(@Optional() private loggerService:LoggerService, @Inject(localStorage) private localStorage: Storage) {
    
  // }
  //dynamically loading the rooms component
  // @ViewChild('user',{read:ViewContainerRef}) vcr!: ViewContainerRef;
  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   //changeing the numberofRooms propiety while loading the component
  //   componentRef.instance.numberOfRooms = 50;
  // }

  @ViewChild('name',{static:true}) name!: ElementRef;
  ngOnInit(): void {
    this.loggerService.log('ApplicationComponent.ngOnInit()');
    this.name.nativeElement.innerText = "David Hotels";
    this.localStorage.setItem('name','David Hotels');
  }

  constructor( @Optional() private loggerService:LoggerService, 
  @Inject(localStorageToken) private localStorage: any) {

  }

  
}
