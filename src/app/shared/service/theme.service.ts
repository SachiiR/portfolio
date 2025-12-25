import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private dark = true;

  constructor() {
    const saved = localStorage.getItem('theme');
    this.dark = saved === 'dark';
    this.update();
  }

  toggle() {
    this.dark = !this.dark;
    localStorage.setItem('theme', this.dark ? 'dark' : 'light');
    this.update();
  }

  private update() {
    document.documentElement.classList.toggle('dark', this.dark);
  }

  isDark() {
    return this.dark;
  }
}
