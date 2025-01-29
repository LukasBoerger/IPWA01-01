import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  // Funktion, um die Ausrichtung basierend auf der Schriftkultur festzulegen
  isLeftToRight(): boolean {
    const lang = document.documentElement.lang || 'en'; // Hole die Sprache aus dem HTML-Tag
    return ['en', 'de', 'fr', 'es'].includes(lang); // LTR-Sprachen
  }
}
