import { Route } from '@angular/router';
import { ForgotPasswordModernReversedComponent } from 'app/modules/admin/pages/authentication/forgot-password/modern-reversed/forgot-password.component';
import { AuthForgotPasswordComponent } from 'app/modules/auth/forgot-password/forgot-password.component';

export const authForgotPasswordRoutes: Route[] = [
    {
        path     : '',
        component: ForgotPasswordModernReversedComponent
    }
];
