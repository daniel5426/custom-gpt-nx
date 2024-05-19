import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private keycloakService: KeycloakService) {}
  getUserName(): string {
    return this.keycloakService.getUsername();
  }

  logout(): void {
    this.keycloakService.logout();
  }

  getLoggedUser(): any {
    return this.keycloakService.getKeycloakInstance().idTokenParsed;
  }

  getUserRole(): string[] {
    return this.keycloakService.getUserRoles();
  }

  canAccess(role: string): boolean {
    return this.getUserRole().includes(role);
  }

  getToken(): Promise<string> {
    return this.keycloakService.getToken();
  }
}
