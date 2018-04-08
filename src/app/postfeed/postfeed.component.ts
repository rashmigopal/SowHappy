import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

declare var $: any;
@Component({
    selector: 'app-typography',
    templateUrl: './postfeed.component.html',
    styleUrls: ['./postfeed.component.css']
})
export class PostFeedComponent {
    mainArray: string[] = [];
    landLords: any;
    producers: any;
    consumers: any;
    services: any;
    mailform: FormGroup;
    constructor(private fb: FormBuilder) {
        this.mailform = this.fb.group({
            MAIL_CONTENT: ""
        })
        this.landLords = [
            {
                "username": "Srikanth",
                "postTitle": "i have a 1acre of land which is suitable for cotton and not being used",
                "loactionAddress": "EGL, Bangalore"
            },
            {
                "username": "Prabhakar",
                "postTitle": "i have around 5 acres of land suitable for corn plant cultivation",
                "loactionAddress": "Nagawara, Bangalore"
            }
        ],
            this.producers = [
                {
                    "username": "Revathi",
                    "loactionAddress": "EGL, Bangalore",
                    "postTitle": "2.5 Acres marshy land at EGL"
                },
                {
                    "username": "Devanna",
                    "loactionAddress": "Manyata, Bangalore",
                    "postTitle": "7 Acres wet land at Manyata"
                },
                {
                    "username": "Mahalakshmi",
                    "loactionAddress": "Udupi Dist Karnataka",
                    "postTitle": "30 Acres of Wet land near Udupi Railway Station"
                }
            ],
            this.consumers = [{
                "username": "Sumanth",
                "postTitle": "Need 30 kg tomatoes at EGL Bangalore",
                "loactionAddress": "BANGALORE"
            }, {
                "username": "Ramya",
                "postTitle": "Need 15 kgs potatoes at RT Nagar Bangalore",
                "loactionAddress": "BANGALORE"
            },
            {
                "username": "Rashmi",
                "postTitle": "Need 50 kgs Oranges at MG Road Bangalore",
                "loactionAddress": "BANGALORE"
            }],
            this.services = [{
                "username": "Madhavi",
                "postTitle": "Lorry servicess available at EGL BANGALORE",
                "loactionAddress": "EGL BANGALORE"
            },
            {
                "username": "Ramanna",
                "postTitle": "Water servicess available at Udupi District",
                "loactionAddress": "UDUPI KARNATAKA"
            },
            {
                "username": "Geetha",
                "postTitle": "Insurance services available at your Door Step at Bangalore",
                "locationAddress": "MG ROAD, BANGALORE"
            }],
            this.mainArray = [this.landLords,this.producers,this.consumers,this.services];
            console.log(this.mainArray);
    }
    showNotification(from, align) {
        const type = ['', 'info', 'success', 'warning', 'danger'];

        const color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "notifications",
            message: "Your interest has been notified. You will be contacted soon. Thank you"

        }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                }
            });
    }
    sendContactInfo(from, align) {
        const type = ['', 'info', 'success', 'warning'];

        const color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "notifications",
            message: "You will be contacted in next 24 hours. Thank you"

        }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                }
            });
    }

    changeEvent(val: any) {
        console.log(val)
        if (val == "Your seeing all posts"){
            this.mainArray = [this.landLords,this.producers,this.consumers,this.services];
            console.log(this.mainArray[0])
        }
        if (val == "Landlord Post"){
            this.mainArray = [this.landLords];
            
        }
        if (val == "Producer Post"){
            this.mainArray = [this.producers];
        }
        if (val == "Consumer Post"){
            this.mainArray = [this.consumers];
        }
        if (val == "Service Provider Post"){
            this.mainArray = [this.services];
        }
    }

}
