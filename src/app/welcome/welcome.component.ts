import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  welcomeMessageFromService = ''
  name = ''
  error = ''
  
  // ActivatedRoute
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService) { 

  }

  ngOnInit(): void {
    console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {

    this.service.executeHelloWorldBeanService().subscribe(
          response => this.handleSuccesfulResponse(response.message),
          error => this.handleErrorResponse(error.error.message)
       );

    //console.log('Last line of getWElcomeMessage')
  }

  getWelcomeMessageWithParameter() {

    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
          response => this.handleSuccesfulResponse(response.message),
          error => this.handleErrorResponse(error.error.message)
       );

    //console.log('Last line of getWElcomeMessage')
  }

  handleSuccesfulResponse(message: string) {
    this.welcomeMessageFromService = message
  }

  handleErrorResponse(error: string) {
    this.welcomeMessageFromService = error
  }

}
