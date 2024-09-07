import type { LoggerInstance } from './analytics/index'
import type { AppStateInstance } from './states/app/app';
import type { AuthenticationStateInstance } from './states/authentication/authentication';
import type { ConfigStateInstance } from './states/config/config';
import type { StatusStateInstance } from './states/status/status';
import type { UserStateInstance } from './states/user/user';
import type { AuthenticationApi } from './open-api/apis/AuthenticationApi';
import type { StatusApi } from './open-api/apis/StatusApi';
import type { UserApi } from './open-api/apis/UserApi';

export interface RegisteredServices {
  'loggerService'?: LoggerInstance,
	'appState'?: AppStateInstance	
	'authenticationState'?: AuthenticationStateInstance	
	'configState'?: ConfigStateInstance	
	'statusState'?: StatusStateInstance	
	'userState'?: UserStateInstance	
	'authenticationApi'?: AuthenticationApi	
	'statusApi'?: StatusApi	
	'userApi'?: UserApi	
}

export type ServiceNames = keyof RegisteredServices;

type RegisteredServiceTypes = RegisteredServices[ServiceNames]; 
type registrableService = () => Promise<RegisteredServiceTypes>;

type ServiceTypes<T extends ServiceNames> = 
    T extends "loggerService" ? LoggerInstance :
    T extends "appState" ? AppStateInstance :
    T extends "authenticationState" ? AuthenticationStateInstance :
    T extends "configState" ? ConfigStateInstance :
    T extends "statusState" ? StatusStateInstance :
    T extends "userState" ? UserStateInstance :
    T extends "authenticationApi" ? AuthenticationApi :
    T extends "statusApi" ? StatusApi :
    T extends "userApi" ? UserApi :
    undefined;

export class Services {
  private services = new Map<ServiceNames, RegisteredServices[keyof RegisteredServices]>();
  private servicesOnDemand = new Map<ServiceNames, () => Promise<registrableService>>();

  constructor() {
    this.servicesOnDemand.set('loggerService', async() => (await import('./analytics/core/setup')).loggerFactory);
    this.servicesOnDemand.set('appState', async() => (await import('./states/app/app')).appStateFactory);
    this.servicesOnDemand.set('authenticationState', async() => (await import('./states/authentication/authentication')).authenticationStateFactory);
    this.servicesOnDemand.set('configState', async() => (await import('./states/config/config')).configStateFactory);
    this.servicesOnDemand.set('statusState', async() => (await import('./states/status/status')).statusStateFactory);
    this.servicesOnDemand.set('userState', async() => (await import('./states/user/user')).userStateFactory);
    this.servicesOnDemand.set('authenticationApi', async function() {
      const authenticationApi = (await import('./open-api/apis/AuthenticationApi')).AuthenticationApi; 
      return async() => {
        return new authenticationApi()
      }
    });
    this.servicesOnDemand.set('statusApi', async function() {
      const statusApi = (await import('./open-api/apis/StatusApi')).StatusApi; 
      return async() => {
        return new statusApi()
      }
    });
    this.servicesOnDemand.set('userApi', async function() {
      const userApi = (await import('./open-api/apis/UserApi')).UserApi; 
      return async() => {
        return new userApi()
      }
    });
  }

  private async retrieveService<T extends ServiceNames>(serviceKey: T) {
		return (await this.servicesOnDemand.get(serviceKey)!())();
  }

  async getService<T extends ServiceNames>(serviceKey: T) {
    let foundService = this.services.get(serviceKey);
    if (!foundService) {
      foundService = await this.retrieveService(serviceKey);
      this.services.set(serviceKey, foundService);
    }
    return foundService as ServiceTypes<T>;
  }
}

export const Injector = new Services();
