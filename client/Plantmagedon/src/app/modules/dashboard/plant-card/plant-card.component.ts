import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { PlantDTO } from '../../../Model/Plant';

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlantCardComponent {

  @Input() plant: PlantDTO;
  readonly fertilizationIcon: string = './assets/fertilization-icon.svg';
  readonly waterIcon: string = './assets/water-icon.svg';
  readonly waterIconEmpty: string = './assets/water-icon-empty.svg';
  readonly sprayIcon: string = './assets/spray-icon.svg';
  readonly defaultPlantPicture: string = './assets/images/defaultPlant.jpg';

}
