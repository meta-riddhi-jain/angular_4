import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'sort'
})

export class SortPipe implements PipeTransform {
    transform(value: any[], args: string): any {
        if(args === "asc"){
            value = value.sort();
            console.log(value.sort());
        }else if(args === "desc"){
            value = value.sort().reverse();
        }
        return value;
    }
}