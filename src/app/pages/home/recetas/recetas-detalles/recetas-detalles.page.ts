import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-recetas-detalles',
  templateUrl: './recetas-detalles.page.html',
  styleUrls: ['./recetas-detalles.page.scss'],
})
export class RecetasDetallesPage implements OnInit {
  
  recetaCargada:any;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private alertCtrl: AlertController, 
    private router: Router, 
    private recetaService:RecetasService
  ) {
    this.recetaCargada = {};
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recetaId')) {
        return;
      }
      const recetaId = paramMap.get('recetaId');
      this.recetaCargada = this.recetaService.getRecipe(recetaId);
    });
  }

  descargarPdf(){
    const DATA = document.getElementById('data')!;
    const doc = new jsPDF('p','pt','a4');
    const options = {
      backgroud: 'white',
      scale:3,
    };
    html2canvas(DATA,options).then((canvas)=>{
      const imgData = canvas.toDataURL('image/PNG');
      var imgWidth = 210; 
      var pageHeight = 295;  
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      var doc = new jsPDF('p', 'mm');
      var position = 0;

      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save(`${this.recetaCargada.title}.pdf`);
    })
  }
}

