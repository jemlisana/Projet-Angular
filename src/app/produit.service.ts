import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Produit } from "./models/produit"
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  listeProduits: Produit[] = []
  produitsChange: Subject<Produit[]> = new Subject<Produit[]>;
  constructor() {
    this.listeProduits = [
      new Produit("RefProd12", "souris", "souris XYZ", 50.7,'souris.jpg'),
      new Produit("RefProd13", "kit bleutooth", "kit bleutooth", 450,'kit.jpg'),
      new Produit("RefProd11", "PC Portable", "PC Portable Asus", 1000.7,'pc1.jpg'),
      new Produit("RefProd14", "clavier", "clavier hp", 50.7,'clavier.jpg'),
      new Produit("RefProd15", "Smartphone", "Smartphone Samsung j2", 450,'tel.jpg'),
      new Produit("RefProd18", "PC Portable", "PC Portable hp", 1000.7,'pc1.jpg'),
    ]
  }

  getProduits(): Produit[] {

    return this.listeProduits;
  }
  addProduit(p: Produit) {
    let id_prod = this.listeProduits[this.listeProduits.length - 1].id + 1;
    this.listeProduits.push(new Produit(id_prod, p.titre, p.description, p.prix,p.image))
    this.produitsChange.next(this.listeProduits)
  }
  modifierProduit(p: Produit, id: string) {
    let produit = this.listeProduits.find(prod => prod.id == id);
    produit = p;
  }
  supprimerProduit(id: String) {
    this.listeProduits.splice(this.listeProduits.findIndex(produit => produit.id === id), 1);
    this.produitsChange.next(this.listeProduits)
    console.log(this.listeProduits);
  }
  
}
