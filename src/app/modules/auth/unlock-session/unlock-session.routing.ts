import { Route } from '@angular/router';
import { UnlockSessionModernReversedComponent } from 'app/modules/admin/pages/authentication/unlock-session/modern-reversed/unlock-session.component';
import { AuthUnlockSessionComponent } from 'app/modules/auth/unlock-session/unlock-session.component';

export const authUnlockSessionRoutes: Route[] = [
    {
        path: '',
        component: UnlockSessionModernReversedComponent,
    },
];
