import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    console.log('createDb()');
    const CATEGORIES = [
      { id: 101, title: 'Dashboard' },
      { id: 102, title: 'Chart' }
    ];
    const EPICS = [
      { categoryId: 101, id: 1001, title: 'Creation' },
      { categoryId: 101, id: 1002, title: 'Runtime' },
      { categoryId: 102, id: 1003, title: 'Configuration' },
    ];

    return {
      categories: CATEGORIES,
      epics: EPICS
    };
  }
}
