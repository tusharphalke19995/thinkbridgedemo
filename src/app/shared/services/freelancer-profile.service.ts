import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FreelancerprofileService {

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

    // /*====================== Service for uploadEmployerProfileData Details ===================*/
    // saveFreelancerProfileData(profileRequestJson: any) {
    //     this.headers = this.getHeader();
    //     return this.http.post(this.SPRING_SERVER_URL + 'freelancers/profiles', profileRequestJson, { headers: this.headers });
    // }

    // getFreelancerSkillsbyFreelancerId(freelancerId:any){
    //     this.headers = this.getHeader();
    //     return this.http.get(this.SPRING_SERVER_URL + `freelancers/${freelancerId}/skills`, { headers: this.headers }).toPromise();
    // }

    /*====================== Service for getFreelancersProfileDetails Details ===================*/
    getFreelancersProfileDetails(freelancerId: any) {
        return this.http.get(this.SPRING_SERVER_URL + `freelancers/profiles/${freelancerId}`, { responseType: 'text' });
    }
    /*====================== Service for getFreelancersProfileDetails Details ===================*/
}
