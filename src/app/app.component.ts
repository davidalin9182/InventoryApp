import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'InventoryApp';
  role ='Admin';

  //dynamically loading the rooms component
  // @ViewChild('user',{read:ViewContainerRef}) vcr!: ViewContainerRef;
  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   //changeing the numberofRooms propiety while loading the component
  //   componentRef.instance.numberOfRooms = 50;
  // }

  @ViewChild('name',{static:true}) name!: ElementRef;
  ngOnInit(): void {
    this.name.nativeElement.innerText = "David Hotels";
  }
}
