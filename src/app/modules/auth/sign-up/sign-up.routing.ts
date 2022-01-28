import { Route } from '@angular/router';
import { SignUpModernReversedComponent } from 'app/modules/admin/pages/authentication/sign-up/modern-reversed/sign-up.component';
import { AuthSignUpComponent } from 'app/modules/auth/sign-up/sign-up.component';

export const authSignupRoutes: Route[] = [
    {
        path     : '',
        component: SignUpModernReversedComponent
    }
];
