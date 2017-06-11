import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from './pages/list/list.component';
import { EvaluacionesComponent } from './pages/evaluaciones';
import { PlantRowComponent } from './pages/plantRow';
import { CustomDialogTest, DialogContent, DialogContent2 } from './shared/dialog';

export const routes = [
    { path: 'login', component: LoginComponent },
    { path: 'list', component: ListComponent },
    {
        path: 'plantList', component: PlantRowComponent,
        children: [
            { path: 'evaluaciones', component: EvaluacionesComponent }
        ]
    },
    { path: '', component: CustomDialogTest }
];

export const navigatableComponents = [
    LoginComponent,
    ListComponent,
    EvaluacionesComponent,
    PlantRowComponent,
    CustomDialogTest,
    DialogContent,
    DialogContent2
];