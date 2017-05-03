import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    console.log('createDb()');
    const CATEGORIES = [
        { id: 1, title: 'Dashboard' },
        { id: 2, title: 'Chart' }
      ];
    const EPICS = [
      {},
      {},
      {}
    ];

    return {
      categories: CATEGORIES,
      epics: EPICS
    };
  }
}
