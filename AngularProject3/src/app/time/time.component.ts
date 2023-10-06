import { Component } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {
  WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  updateTime(): void {
    const now = new Date();

    const timeElement = document.getElementById("time");
    if (timeElement) {
      timeElement.innerHTML = `<div class="neon-text">${this.zeroPadding(now.getHours(), 2)}:${this.zeroPadding(now.getMinutes(), 2)}:${this.zeroPadding(now.getSeconds(), 2)}</div>`;
    }

    const dateElement = document.getElementById("date");
    if (dateElement) {
      dateElement.innerHTML = `<div class="neon-text">${now.getFullYear()}/${this.zeroPadding(now.getMonth() + 1, 2)}/${this.zeroPadding(now.getDate(), 2)} ${this.WEEK[now.getDay()]}</div>`;
    }
  }

  zeroPadding(num: number, digit: number): string {
    return String(num).padStart(digit, '0');
  }

  ngAfterViewInit() {
    this.updateTime(); // Call it once when the component is ready
    setInterval(() => this.updateTime(), 1000); // Update every second
  }

  
}
