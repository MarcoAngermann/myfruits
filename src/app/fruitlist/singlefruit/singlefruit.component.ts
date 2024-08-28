import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-singlefruit',
  standalone: true,
  imports: [],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss'
})
export class SinglefruitComponent {
 @Input()fruit =   {
  name: "Apfel",
  img:"apple.png",
  description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
  genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
  stars: 2.3,
  reviews:[{name: "Mandy K.", text: "perfekt für Kuchen"},{name: "Olaf P.", text: "Kann man auch mal machen"}],
};
}
