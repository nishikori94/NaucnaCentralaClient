import { Component, OnInit } from '@angular/core';
import { HomeService, Casopis, PaymentMethod } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  casopisi: Casopis[] = [];
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

}
