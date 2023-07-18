import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allContacts:any[], searchKey:string, propertyname:string): any[] {
    const result:any = []
    if(!allContacts || searchKey=="" || propertyname==""){
      return allContacts
    }
    allContacts.forEach((item:any)=>{
      if(item[propertyname].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    })

    return result;
  }

}
