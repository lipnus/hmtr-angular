import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../__service/alert.service';
import { AuthenticationService } from '../__service/authentication.service';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
    account: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.account.id, this.account.password)
            .subscribe(
                user => {
                    if(user.state=='success'){
                        this.router.navigate([this.returnUrl]);
                    }
                    else{
                        this.alertService.error(user.msg);
                        this.loading = false;
                    }
                }
            );
    }
}
