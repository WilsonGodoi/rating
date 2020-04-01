import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "orderByField"
})
export class OrderByFieldPipe implements PipeTransform {
  transform(array: any[], field: any): any[] {
    if (!Array.isArray(array)) {
      return array;
    }

    return array.sort((x, y) =>
      x[field] > y[field] ? -1 : x[field] < y[field] ? 1 : 0
    );
  }
}
