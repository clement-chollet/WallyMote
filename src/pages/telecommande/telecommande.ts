import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Telecommande page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-telecommande',
  templateUrl: 'telecommande.html',
})
export class Telecommande {

  ///Télécommande methods
  isSoundOn: boolean = false;
  isPlay: boolean = false;
  nameIcon: String = "volume-off";
  playIcon: String = "pause";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //To change sound button icon
  onClickSoundButton(){
    //Sound on->off
    if(this.isSoundOn){
      this.isSoundOn = false;
      this.nameIcon = "volume-off";
    }
    //Sound off->on
    else{
      this.isSoundOn = true;
      this.nameIcon = "volume-up";
    }
  }

  //To change play button icon
  onClickPlayer(){
    //Sound played
    if(this.isPlay){
      this.isPlay = false;
      this.playIcon = "pause"
    }
    //Sound paused
    else{
      this.isPlay = true;
      this.playIcon = "play";
    }
  }

}



