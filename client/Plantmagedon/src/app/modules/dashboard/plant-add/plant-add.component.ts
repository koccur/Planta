import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-plant-add',
  templateUrl: './plant-add.component.html',
  styleUrls: ['./plant-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlantAddComponent implements OnInit {
  readonly fertilizationIcon: string = './assets/fertilization-icon.svg';
  readonly waterIcon: string = './assets/water-icon.svg';
  readonly waterIconEmpty: string = './assets/water-icon-empty.svg';
  readonly sprayIcon: string = './assets/spray-icon.svg';
  readonly timeIcon: string = './assets/clock-icon.svg';
  readonly sunnyIcon: string = './assets/sunny-icon.svg';
  readonly pencilIcon: string = './assets/pencil-icon.svg';
  constructor() { }

  ngOnInit() {
  }

  changeIcon() {

  }
}
