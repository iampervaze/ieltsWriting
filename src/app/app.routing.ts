import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ReviewComponent } from './components/review/review.component';
import { FeaturesComponent } from './core/components/features/features.component';
export const appRoutes: Routes = [
    { path: '', component: ReviewComponent },
    { path: 'features', component: FeaturesComponent}
];

