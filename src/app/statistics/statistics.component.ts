import { Component } from '@angular/core';
import {
  faDiscord,
  faLinkedin,
  faMedium,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  twitter = faTwitter;
  discord = faDiscord;
  telegram = faTelegram;
  linkedin = faLinkedin;
  medium = faMedium;
}
