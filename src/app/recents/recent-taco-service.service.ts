import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class RecentTacoServiceService {

  constructor(private apiService:ApiServiceService) { }

  getRecentTacos(){
    return this.apiService.get('/design1/recent1');
  }
}
