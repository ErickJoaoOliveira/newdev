import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private saitizer: DomSanitizer) {}

  transform(url: string): unknown {
    return this.saitizer.bypassSecurityTrustResourceUrl(url);
  }

}