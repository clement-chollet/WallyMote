import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Onoff page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-onoff',
  templateUrl: 'onoff.html',
})
export class OnOffPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Onoff');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Extinction du mur d\'écrans',
      subTitle: 'Voulez-vous vraiment éteindre le mur d\'écrans',
      buttons: ['Oui', 'Non']
    });
    alert.present();
  }

}
