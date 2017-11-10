import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-clear',
  templateUrl: 'clear.html',
})
export class ClearPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Vider le mur d\'écrans',
      subTitle: 'Voulez-vous vraiment enlever toutes les vidéos du mur d\'écrans',
      buttons: ['Oui', 'Non']
    });
    alert.present();
  }

}
