import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlantDTO } from '../../Model/Plant';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit{
  plants$: Observable<PlantDTO[]>;

  constructor(private readonly plantService: PlantService,
              private readonly router: Router,
              private readonly cd: ChangeDetectorRef) {
    this.plants$ = this.plantService.getPlants();
  }

  addPlant(): void {
    this.router.navigateByUrl('dashboard/addPlant');
  }

  ngOnInit(): void {
  }
}
