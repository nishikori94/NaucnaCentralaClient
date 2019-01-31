import { Component, OnInit } from '@angular/core';
import { HomeService, Casopis, Rad, PaymentMethod } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  casopisi: Casopis[] = [];

  radovi: Rad[] = [];

  paymentMethods: PaymentMethod[] = [];

  ngOnInit() {
    this.homeService.getAllCasopisi().subscribe(data => {
      this.casopisi = data.map(c => {
          return {
              id: c.id,
              cena: c.cena,
              naziv: c.naziv,
              merchantId: c.merchantId
          };
      });
  });
  }

  onKupiClick(id: number){
    const casopisi = this.casopisi.filter(c => c.id === id);
    if (!casopisi || casopisi.length === 0) {
      console.log('Casopis ne postoji');
      return;
    }

    const casopis = casopisi[0];
    this.homeService.kupiCasopis(casopis.id).subscribe(data => {
      window.location.href = data.url;
    });
  }

  onKupiRadClick(rad: Rad){
    this.homeService.kupiRad(rad).subscribe(data => {
      window.location.href = data.url;
    });
  }

  prikaziRadove(id: number){
    this.homeService.getRadovi(id).subscribe(val => {
      this.radovi = val.map(c => {
        return {
            id: c.id,
            cena: c.cena,
            naziv: c.naziv,
            casopis: c.casopis,
            nazivAutora: c.nazivAutora
        };
    });
    });
  }

}
