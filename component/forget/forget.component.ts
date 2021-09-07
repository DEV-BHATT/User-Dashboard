import { Component, OnInit } from '@angular/core';
import {faLock} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  faLock =faLock;
  constructor() { }

  ngOnInit(): void {
  }

}
