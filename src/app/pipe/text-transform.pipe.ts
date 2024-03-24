import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform',
  standalone: true
})
export class TextTransformPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let result = ""
    if(value) {
      value.split("_").forEach((subString: string) => {
        result = result + subString + " ";
      })
      result = result.trim();
    }
    return result;
  }

}
