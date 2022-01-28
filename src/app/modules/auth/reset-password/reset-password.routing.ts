import { Route } from '@angular/router';
import { ResetPasswordModernReversedComponent } from 'app/modules/admin/pages/authentication/reset-password/modern-reversed/reset-password.component';
import { AuthResetPasswordComponent } from 'app/modules/auth/reset-password/reset-password.component';

export const authResetPasswordRoutes: Route[] = [
    {
        path     : '',
        component: ResetPasswordModernReversedComponent
    }
];
