import { Component, OnInit } from '@angular/core';
import { RecentTacoServiceService } from './recent-taco-service.service';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.css']
})
export class RecentsComponent implements OnInit {
  recentTacos:any;
  constructor(private recentTaco:RecentTacoServiceService) { }

  ngOnInit(): void {
    // this.http.get("http://localhost:8080/design1/recent1").subscribe(
    //   (data) =>{
    //     console.log(data)
    //   });

    this.recentTaco.getRecentTacos().subscribe(
      (data:any) =>{
        this.recentTacos=data;
      }
    );

  }

}
