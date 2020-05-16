import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PlantDTO } from '../../../Model/Plant';
import { PlantService } from '../../../services/plant.service';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlantDetailsComponent implements OnInit {
  selectedPlant: PlantDTO;
  readonly fertilizationIcon: string = './assets/fertilization-icon.svg';
  readonly waterIcon: string = './assets/water-icon.svg';
  readonly waterIconEmpty: string = './assets/water-icon-empty.svg';
  readonly sprayIcon: string = './assets/spray-icon.svg';
  readonly timeIcon: string = './assets/clock-icon.svg';
  readonly sunnyIcon: string = './assets/sunny-icon.svg';
  readonly pencilIcon: string = './assets/pencil-icon.svg';

  constructor(private readonly activeRoute: ActivatedRoute,
              private readonly translate: TranslateService,
              private readonly plantService: PlantService) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.paramMap.get('id')) {
      this.plantService.getPlant(+this.activeRoute.snapshot.paramMap.get('id')).subscribe((plant: PlantDTO) => {
        this.selectedPlant = plant;
      });

    }
  }

  changeIcon(): void {
    this.selectedPlant.picture = './assets/plant-temp-icon.svg';
  }
}
