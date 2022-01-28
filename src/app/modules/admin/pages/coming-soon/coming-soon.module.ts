import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { ComingSoonClassicComponent } from 'app/modules/admin/pages/coming-soon/classic/coming-soon.component';
import { ComingSoonModernComponent } from 'app/modules/admin/pages/coming-soon/modern/coming-soon.component';
import { ComingSoonModernReversedComponent } from 'app/modules/admin/pages/coming-soon/modern-reversed/coming-soon.component';
import { ComingSoonSplitScreenComponent } from 'app/modules/admin/pages/coming-soon/split-screen/coming-soon.component';
import { ComingSoonSplitScreenReversedComponent } from 'app/modules/admin/pages/coming-soon/split-screen-reversed/coming-soon.component';
import { ComingSoonFullscreenComponent } from 'app/modules/admin/pages/coming-soon/fullscreen/coming-soon.component';
import { ComingSoonFullscreenReversedComponent } from 'app/modules/admin/pages/coming-soon/fullscreen-reversed/coming-soon.component';

const routes: Routes = [
    {
        path: 'coming-soon-1',
        component: ComingSoonClassicComponent,
    },
    {
        path: 'coming-soon-2',
        component: ComingSoonModernComponent,
    },
    {
        path: 'coming-soon-3',
        component: ComingSoonModernReversedComponent,
    },
    {
        path: 'coming-soon-4',
        component: ComingSoonSplitScreenComponent,
    },
    {
        path: 'coming-soon-5',
        component: ComingSoonSplitScreenReversedComponent,
    },
    {
        path: 'coming-soon-6',
        component: ComingSoonFullscreenComponent,
    },
    {
        path: 'coming-soon-7',
        component: ComingSoonFullscreenReversedComponent,
    },
];

@NgModule({
    declarations: [
        ComingSoonClassicComponent,
        ComingSoonModernComponent,
        ComingSoonModernReversedComponent,
        ComingSoonFullscreenComponent,
        ComingSoonFullscreenReversedComponent,
        ComingSoonSplitScreenComponent,
        ComingSoonSplitScreenReversedComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseCardModule,
        FuseAlertModule,
        SharedModule,
    ],
})
export class ComingSoonModule {}
