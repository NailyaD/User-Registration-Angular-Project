import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SelectItem} from 'primeng';
import {TranslationsService} from '../../services/translations/translations.service';

@Component({
  selector: 'app-language-change',
  templateUrl: './language-change.component.html',
  styleUrls: ['./language-change.component.scss']
})
export class LanguageChangeComponent implements OnInit {

  languages: SelectItem[];
  selectedLang = 'en';

  @Output()
  langChanged: EventEmitter<string> =  new EventEmitter<string>();

  constructor(private translationsService: TranslationsService) { }

  ngOnInit(): void {
    this.langChangedEventHandler(this.selectedLang);
    this.languages = [
      {
        label: 'RU',
        value: 'ru'
      },
      {
        label: 'EN',
        value: 'en'
      }
    ];
  }

  processSelectOfDropdownComponent($event: Event) {
    this.langChanged.emit(this.selectedLang);
  }

  langChangedEventHandler(lang: string) {
    this.selectedLang = lang;
    this.langChanged = this.translationsService.getTranslation(lang);
  }

}
