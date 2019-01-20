import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {NgModule} from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
    HttpClient,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    HttpClient,
  ],
})

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  })

export class PortfolioComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  selectedFile: File = null;

  onFileSelected(event){
    this.selectedFile = <File> event.target.files[0];
    console.log(event);
  }
  // @CrossOrigin
  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post("https://firebasestorage.googleapis.com/v0/b/angular7-website.appspot.com/o/website", fd)
      .subscribe(res => {
        console.log(res);
      });
  }
}
