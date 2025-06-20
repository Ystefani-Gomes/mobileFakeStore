import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab1Page implements OnInit {
  produtos: any[] = [];

  constructor(
    private produtoService: ProdutoService,
    private router: Router // Adicionado aqui
  ) {}

  ngOnInit() {
    this.produtoService.buscarProdutos().subscribe(dados => {
      this.produtos = dados;
    });
  }

  verDetalhes(id: number) {
    this.router.navigate(['/tabs/tab2', id]);
  }
}