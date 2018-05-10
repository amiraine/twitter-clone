import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { MomentsComponent } from './moments/moments.component';
import { NotificationsComponent } from './notifications/notifications.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'moments',
    component: MomentsComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
