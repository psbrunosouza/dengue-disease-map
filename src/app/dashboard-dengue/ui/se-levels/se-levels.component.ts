import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-se-levels',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './se-levels.component.html',
  styleUrl: './se-levels.component.scss',
})
export class SeLevelsComponent implements OnInit {
  chart!: any;

  createChart() {
    this.chart = new Chart('chart', {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    });
  }

  ngOnInit(): void {
    this.createChart();
  }
}
