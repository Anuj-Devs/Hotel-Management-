import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const isLoginFind = localStorage.getItem("loginUser")
  if (isLoginFind == null) {
    router.navigateByUrl("/login")
    return false;
  } else {
    return true;
  }
};
