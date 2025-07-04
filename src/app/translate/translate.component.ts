import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.css'
})
export class TranslateComponent {
  swapAnimating = false;
  inputText = '';
  translatedText = '';
  sourceLang = 'en';
  targetLang = 'fr';

  // Add missing hover state properties for template
  registerBtnHover = false;
  signinBtnHover = false;

  sourceLangs = [
    { code: 'detect', name: 'Detect language' },
    { code: 'en', name: 'English' },
    { code: 'zo', name: 'Zomi' },
  ];

  targetLangs = [
    { code: 'zo', name: 'Zomi' },
    { code: 'en', name: 'English' },
  ];

  selectSourceLang(lang: string) {
    this.sourceLang = lang;
  }

  selectTargetLang(lang: string) {
    this.targetLang = lang;
  }

  swapLanguages() {
    this.swapAnimating = false;
    setTimeout(() => this.swapAnimating = true, 0);
    [this.sourceLang, this.targetLang] = [this.targetLang, this.sourceLang];
  }

  onInput() {
    // Replace with API call or actual translation logic
    this.translatedText = this.inputText ? this.inputText.split('').reverse().join('') : '';
  }
}
