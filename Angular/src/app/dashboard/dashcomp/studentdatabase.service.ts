import { Injectable } from '@angular/core';  
import { Istudents } from './casesensitive'

@Injectable()
export class appService {  
    getstudents(): Istudents [] {
        return[
          
          {"id":"1",
            "Name":"Nihal",
              "Branch":"ECM",
           "College":"Snist",
          "Percentage":".80"},
          
          {"id":"2",
            "Name":"Shravan",
              "Branch":"ECM",
               "College":"Snist",
           "Percentage":".73"},
       
          {"id":"3",
            "Name":"Vinay",
              "Branch":"ECE",
           "College":"Snist",
           "Percentage":".85"},
           
          {"id":"4",
            "Name":"Sandeep",
              "Branch":"ECE",
               "College":"Snist",
           "Percentage":".90"},
      
          {"id":"5",
          "Name":"Sai",
              "Branch":"CSE",
               "College":"Snist",
           "Percentage":".72"},
      
          {"id":"6",
            "Name":"Ganesh Srv",
              "Branch":"CSE",
               "College":"GNIT",
           "Percentage":".82"},
      
          {"id":"7",
            "Name":"Chaitanya",
              "Branch":"ECE",
               "College":"Snist",
           "Percentage":".89"},
      
          {"id":"8",
            "Name":"Anvesh",
              "Branch":"ECE",
               "College":"Snist",
           "Percentage":".78"},
      
          {"id":"9",
            "Name":"Ashish",
              "Branch":"CSE",
               "College":"Snist",
           "Percentage":".76"},
      
          {"id":"10",
            "Name":"Venkatesh",
              "Branch":"ECE",
               "College":"Snist",
           "Percentage":".81"},
      
          {"id":"11",
            "Name":"Pavithra",
              "Branch":"CSE",
               "College":"GNIT",
           "Percentage":".83"},
      
          {"id":"12",
            "Name":"Soujanya",
              "Branch":"CSE",
               "College":"GNIT",
           "Percentage":".72"},
      
          {"id":"13",
            "Name":"Anurag",
              "Branch":"CSE",
               "College":"GNIT",
           "Percentage":".85"},
      
          {"id":"14",
          "Name":"Akhil",
              "Branch":"CSE",
               "College":"GNIT",
           "Percentage":".88"}  
        ]
      }
      
} 