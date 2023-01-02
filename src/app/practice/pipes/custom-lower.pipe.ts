import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'customlower' })
export class CustomLowerCasePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return value?.toLowerCase();
    }
}