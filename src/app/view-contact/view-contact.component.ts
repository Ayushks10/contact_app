import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  contact: any = {}
  errorMsg: string = ''
  group: string = ''

  constructor(private api: ApiService, private viewRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    //get contact id from its url
    this.viewRoute.params.subscribe((data: any) => {
      //destructuring the data
      const { id } = data
      console.log(id)

      //api call to get a particular contact details
      this.api.viewContact(id).subscribe({
        next: (response: any) => {
          console.log(response);
          const { groupId } = response
          //api call to get group
          this.api.getGroup(groupId).subscribe((data: any) => {
            console.log(data);
            const { name } = data
            this.group = name
          })
          this.contact = response
        },
        error: (err: any) => {
          console.log(err.message);
          this.errorMsg = err.message
        }
      })

    })
  }
}
