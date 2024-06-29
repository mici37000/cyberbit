import { DomSanitizer } from '@angular/platform-browser';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}

  transform(value: string, maxChars: number) {
    return value?.substring(0, maxChars);
  }
}