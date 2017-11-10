import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ParamScreen } from '../paramscreen/paramscreen';
import { Telecommande } from '../telecommande/telecommande';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1 = AboutPage;
  tab2 = Telecommande;
  tab3 = ParamScreen;

  idBlocSelectionne: number = 3;

  isScreenSelected :boolean; 
  visibilityDivButton :String;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
      this.isScreenSelected = false;
      this.visibilityDivButton = "none";
  }

  onClickScreen(){
      if(this.isScreenSelected){
        this.isScreenSelected = false;
        this.visibilityDivButton = "none"; 
      }
      else{
        this.isScreenSelected = true;
        this.visibilityDivButton = "inline";
      }
      console.log("Valeur de la sélection de screen : " + this.isScreenSelected);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Suppression du bloc',
      subTitle: 'Voulez-vous vraiment supprimer le bloc ' + this.idBlocSelectionne + ' ? ',           //"Supprimer" un peu violent non?
      buttons: ['Oui', 'Non']
    });
    alert.present();
  }

  onClickTelecommande(){
    this.navCtrl.push(Telecommande);
  }

}
