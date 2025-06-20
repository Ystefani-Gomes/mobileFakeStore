import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class Tab3Page {
  nome = 'Ystefani Mariana Gomes ';
  matricula = '01717757';
  curso = 'Análise e Desenvolvimento de Sistemas - 3NB - Noturno';
}