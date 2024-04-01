import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name:string = 'Cristian';
  public gender: 'Male'|'Female' = 'Male';
  public invitationMap = {
    Male: 'invitarlo',
    Female: 'invitarla'
  }

  changeClient():void{

    this.name = 'Laura';
    this.gender = 'Female';

  }

  //i18n Plural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }


  deleteClient():void{
    this.clients.shift();
  }

  //KeyValue Pipe

  public person = {
    name: 'Cristian',
    age: 26,
    address: 'Bogota, Colombia'
  }

  //Async Pipe
  public myObservableTimer = interval(2000)
    .pipe(
      tap(value => console.log('Tap', value))
    );

  public promiseValue:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
      console.log('Tenemos data en la promesa')
    },3500);
  })

}
