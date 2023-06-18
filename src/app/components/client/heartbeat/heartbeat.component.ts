import { Component } from '@angular/core';
import { ClientListComponent } from '../client-list/client-list.component';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client.model';
import { Heartbeat } from 'src/app/models/heartbeat.model';
@Component({
  selector: 'app-heartbeat',
  templateUrl: './heartbeat.component.html',
  styleUrls: ['./heartbeat.component.css']
})
export class HeartbeatComponent {

  chart = [];

  client:undefined|Client[];
  heartbeat:undefined|Heartbeat[];
  constructor(private api:ClientService){
  }
  ngOnInit():void {
    this.getclient();
    

  }
  getclient(){
    this.api.getClients().subscribe(res=>{
      this.client = res;
    })
  }

  // getbyid(client:clientlistmodel){
  //   this.api.getClientById(client).subscribe(res=>{
  //     console.log(client)
  //   })
  // }

  getheartbeats(client:Client){
    this.api.getHeartBeat(client).subscribe(res=>{
      this.heartbeat = res;
      // console.log(this.heartbeat)
      
      let data1 =  res.map(res => Number(res.data1))
      let data2 =  res.map(res => Number(res.data2))
      let data3 =  res.map(res => Number(res.data3))
      let data4 =  res.map(res => Number(res.data4))
      let date = res.map(res => res.date_prelevement)
  
      console.log(data1)

      const labels = date;
      
    
    
    })
  
  
  }


  darkModeEnabled = false;

  toggleDarkMode() {
    this.darkModeEnabled = !this.darkModeEnabled;
  }
}

