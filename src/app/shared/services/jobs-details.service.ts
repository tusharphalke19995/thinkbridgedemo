import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class JobsDetailsService {

    SPRING_SERVER_URL: string = '';

    headers: any = null;

    constructor(private http: HttpClient) {
        this.SPRING_SERVER_URL = environment.SPRING_SERVER_URL;
    }

    getHeader() {
        this.headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
            // 'Authorization': 'Bearer ' + this.token,
        })
        return this.headers;
    }
    /*====================== Service for Posted jobs get Details ===================*/
    getPostedJobsDetails(empIoyerd: number) {
        return this.http.get(this.SPRING_SERVER_URL + `employers/${empIoyerd}/projects/P`, { headers: this.headers });
    }


    /*====================== Service for Active jobs get Details ===================*/
//     getActiveJobsDetails(empIoyerd: number) {
//         return this.http.get(this.SPRING_SERVER_URL + `employers/${empIoyerd}/projects/A`, { headers: this.headers });
//     }

//     /*====================== Service for Draft jobs get Details ===================*/
//     getDraftJobsDetails(empIoyerd: number) {
//         return this.http.get(this.SPRING_SERVER_URL + `employers/${empIoyerd}/projects/D`, { headers: this.headers });
//     }

//     /*====================== Service for Get EmployerProfileData Details ===================*/
//     getEmployerProfileData(employerId: number) {
//         return this.http.get(this.SPRING_SERVER_URL + `employers/profiles/${employerId}`, { headers: this.headers });
//     }

//     /*====================== Service for Get EmployerProfile Image ===================*/
//     getEmployerProfileImage(employerId: number) {
//         return this.http.get(this.SPRING_SERVER_URL + `profile/photo/${employerId}`, { headers: this.headers });
//     }

//     getCountPostedJobs(workPackageId, countFor) {
//         return this.http.get(this.SPRING_SERVER_URL + `workPackage/${workPackageId}/${countFor}`, { headers: this.headers });
//     }

//     uploadEmployerProfileImage(employerId: number, imageString) {
//         return this.http.patch(this.SPRING_SERVER_URL + `profile/photo/${employerId}`, imageString, { headers: this.headers });
//     }

//     /*====================== Service for Get getActiveContractsByEmployerId Details ===================*/
//     getActiveContractsByEmployerId(employerId: any, status: any) {
//         return this.http.get(this.SPRING_SERVER_URL + `/workPackage/employers/${employerId}/contracts/${status}`, { headers: this.headers });
//     }
 }
