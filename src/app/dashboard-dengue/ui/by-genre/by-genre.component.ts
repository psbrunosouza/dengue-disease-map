import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-by-genre',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './by-genre.component.html',
  styleUrl: './by-genre.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByGenreComponent {
  public pieChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [300, 500],
      },
    ],
  };

  public pieChartType: ChartType = 'pie';

  ngOnInit(): void {}
}
