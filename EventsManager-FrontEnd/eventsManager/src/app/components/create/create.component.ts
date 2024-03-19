import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../../eventservice';
import {Event} from '../../event.model'

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  ApiService = inject(APIService)
  router = inject(APIService)
  
  createEvent: Event = {
    EventId: 0,
    EventName: '',
    EventDate: new Date(),
    Location: '',
    Cost: 0,
    Language: '',
  };

  ngOnInit(){
    
  }

}
