import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    console.log('createDb()');
    return {
      categories: [
        {
          id: 1,
          title: 'Dashboard'
        },
        {
          id: 2,
          title: 'Chart'
        }
      ]
    };
  }
}
