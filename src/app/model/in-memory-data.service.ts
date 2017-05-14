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
    const TASKS = [
      { epicId: 1001, id: 20001, title: 'Task 1', description: 'Task1 desc'},
      { epicId: 1001, id: 20002, title: 'Task 2', description: 'Task2 desc'},
      { epicId: 1003, id: 20003, title: 'Task 3', description: 'Task3 desc'},
      { epicId: 1003, id: 20004, title: 'Task 4', description: 'Task4 desc'},
    ];

    return {
      categories: CATEGORIES,
      epics: EPICS,
      tasks: TASKS
    };
  }
}
