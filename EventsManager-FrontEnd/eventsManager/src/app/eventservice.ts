import { Injectable, inject } from '@angular/core';
import { Event } from './event.model';
import { HttpClient} from '@angular/common/http'; 

@Injectable({
    providedIn: 'root'
})
export class APIService {
    httpClient = inject(HttpClient);
    constructor(){ }

    getAll() {
        return this.httpClient.get<Event[]>("https://localhost:7097/api/Events/GetAll/GetAll")
    };
    getByID(id: number){
        return this.httpClient.get<Event>("https://localhost:7097/api/Events/GetByID/" + id);
    };
    edit(item:Event) {
        return this.httpClient.put("https://localhost:7097/api/Events/Update", item);
    }
    delete(id:number){
        return this.httpClient.delete("https://localhost:7097/api/Events/Delete/" + id);
    }
    create(item:Event){
        return this.httpClient.post<Event>("https://localhost:7097/api/Events/Delete/", item)
    }
}
