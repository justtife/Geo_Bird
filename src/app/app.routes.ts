import { Routes } from '@angular/router';
import { CourseComponent } from './pages/course/course.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: "", component: HomepageComponent },
    { path: "course", component: CourseComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'login', component: LoginComponent }
];
