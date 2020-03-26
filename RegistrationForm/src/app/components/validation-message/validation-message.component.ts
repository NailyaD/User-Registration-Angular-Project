import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {TranslationsService} from '../../services/translations/translations.service';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent implements OnInit {

  @Input()
  control: AbstractControl;

  get errors() {
    return Object.keys(this.control.errors);
  }

  constructor(private translationsService: TranslationsService) {
  }

  ngOnInit(): void {
  }

  isControlInvalid(): boolean {
    return this.control && this.control.invalid && this.control.touched;
  }

  getTranslation(key: string) {
    return this.translationsService.getTranslation(key);
  }

}

