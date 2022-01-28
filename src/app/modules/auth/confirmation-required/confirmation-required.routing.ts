import { Route } from '@angular/router';
import { ConfirmationRequiredModernReversedComponent } from 'app/modules/admin/pages/authentication/confirmation-required/modern-reversed/confirmation-required.component';
import { AuthConfirmationRequiredComponent } from 'app/modules/auth/confirmation-required/confirmation-required.component';

export const authConfirmationRequiredRoutes: Route[] = [
    {
        path     : '',
        component: ConfirmationRequiredModernReversedComponent
    }
];
