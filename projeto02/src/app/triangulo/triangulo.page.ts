import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.page.html',
  styleUrls: ['./triangulo.page.scss'],
})
export class TrianguloPage implements OnInit {

  base: number = 0;
  altura: number = 0;
  area: number = 0;

  
  constructor(public alertController: AlertController) { }
  
  ngOnInit() {
  }

  calcular() {
      this.area = (this.base * this.altura) / 2;
  }

  async mostrarArea() {
    this.calcular();
    const alerta = await this.alertController.create({
      header: "Área",
      message: "A área é "+this.area,
      buttons: ['Ok']
    });
    await alerta.present();
    this.base = 0;
    this.altura = 0;
  }

}
