import { Component, OnInit } from '@angular/core';
import { BibleService } from './bible.service';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss']
})
export class BibleComponent implements OnInit {
  vers: any;
  constructor(private bibleService: BibleService) { }

  ngOnInit() {
    this.vers = this.bibleService.getBibleData().subscribe( response => {
      console.log('response: ', response.books[0]);
      }, error => {
        console.log('error: ', error);
      });
  }
}
