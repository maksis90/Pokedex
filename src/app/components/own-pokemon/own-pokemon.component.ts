import { Component, OnInit } from '@angular/core';
// import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { IPokemon } from '../../model';
import  { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-own-pokemon',
  templateUrl: './own-pokemon.component.html',
  styleUrls: ['./own-pokemon.component.scss']
})
export class OwnPokemonComponent implements OnInit {

  pokemon: IPokemon;

  constructor( private router: Router,
              //private location: Location,
              private pokemonService: PokemonsService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let pokemonId = this.activeRoute.snapshot.paramMap.get('id');

    this.pokemon = this.pokemonService.getPokemon((+pokemonId));
  }

  goBackLink(): void {
   // this.location.back();
    this.router.navigate(['']);
  }

}
