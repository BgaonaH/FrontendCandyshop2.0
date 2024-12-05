import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionStorageService } from '../services/session-storage.service';


export const authGuard: CanActivateFn = (route, state) => { 
  const session = inject(SessionStorageService);
  const router = inject(Router);
  const token = session.getItem('token');
  console.log('Token:', token); // Verificar el valor del token 
  if (token != null) { return true; } console.log('Redirecting to /user/login'); // Confirmar redirección 
  return router.createUrlTree(['/user/login']);
};