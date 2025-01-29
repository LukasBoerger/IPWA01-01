import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {MenuComponent} from './components/menu/menu.component';
import {HeaderComponent} from './components/header/header.component';
import {Co2TableComponent} from './components/co2-table/co2-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, MenuComponent, HeaderComponent, Co2TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled1';
}
