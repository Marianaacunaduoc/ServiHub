import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-publicar-servicio',
  templateUrl: './publicar-servicio.page.html',
  styleUrls: ['./publicar-servicio.page.scss'],
})
export class PublicarServicioPage implements OnInit {
  imageSource: any;

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Tu servicio se creó con éxito',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.goToHome();
          }
        }
      ]
    });

    await alert.present();
  }

  goToHome() {
    this.navCtrl.navigateRoot('/home');
  }

  cancel() {
    this.navCtrl.navigateRoot('/home');
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });
    this.imageSource=image.dataUrl;
  };

}
