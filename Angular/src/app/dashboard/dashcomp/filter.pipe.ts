import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students: any, searchText: any): any {
if(searchText === undefined) return students;   
    return students.filter(function(student){
      return student.Name.toLowerCase().includes(searchText.toLowerCase()) ||
      student.Branch.toLowerCase().includes(searchText.toLowerCase()) ||
      student.College.toLowerCase().includes(searchText.toLowerCase()) ||
      student.Percentage.toLowerCase().includes(searchText.toLowerCase());
    })
  }

}
