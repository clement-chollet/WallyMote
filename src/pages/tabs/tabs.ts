import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { ClearPage } from '../clear/clear';
import { WallTelecommandePage } from '../wallTelecommande/wallTelecommande';
import { HomePage } from '../home/home';
import { OnOffPage } from '../onoff/onoff';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ClearPage;
  tab3Root = WallTelecommandePage;
  tab4Root = OnOffPage;

  constructor(public alertCtrl: AlertController) {

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Suppression du bloc',
      subTitle: 'Voulez-vous vraiment éteindre le mur d\'écran ? ',           //"Supprimer" un peu violent non?
      buttons: ['Oui', 'Non']
    });
    alert.present();
  }
}
