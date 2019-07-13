import { Component } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome:string;

  constructor(public alertController: AlertController) {}

  // Cria um alerta personalizado
  async mostrarNome(){
    const alerta = await this.alertController.create({
      header: "Aviso", //Titulo do aviso
      subHeader: "Olha", //Subtitulo do aviso
      message: "Vai dar ruim "+this.nome,//Mensagem do alerta
      buttons:['Ok', 'Cancelar'] //Botões. Podem ser passados mais de um botão
    });
    await alerta.present();
    this.nome = "";
  }
}
