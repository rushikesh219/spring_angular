import { Route } from '@angular/router';
import { SignOutModernReversedComponent } from 'app/modules/admin/pages/authentication/sign-out/modern-reversed/sign-out.component';
import { AuthSignOutComponent } from 'app/modules/auth/sign-out/sign-out.component';

export const authSignOutRoutes: Route[] = [
    {
        path     : '',
        component: SignOutModernReversedComponent
    }
];
