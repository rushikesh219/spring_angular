import { Route } from '@angular/router';
import { SignInModernReversedComponent } from 'app/modules/admin/pages/authentication/sign-in/modern-reversed/sign-in.component';
import { AuthSignInComponent } from 'app/modules/auth/sign-in/sign-in.component';

export const authSignInRoutes: Route[] = [
    {
        path     : '',
        component: SignInModernReversedComponent
    }
];
