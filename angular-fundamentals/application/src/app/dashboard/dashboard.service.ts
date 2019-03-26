import { People } from './models/dashboard.interface';


export class DashboardService {
  constructor() {

  }

  getPeople(): People[] {
    return [
      {
        id: 1,
        name: 'Ann',
        sex: 'female',
        isActive: true,
        children: null,
      },
      {
        id: 2,
        name: 'Aleksandr',
        sex: 'male',
        isActive: true,
        children: [{
          name: 'Tedd',
          age: 20,
      }],
    },
    {
      id: 3,
      name: 'Siarhei',
      sex: 'male',
      isActive: false,
      children: [{
        name: 'Teddy',
        age: 15,
      },
      {
        name: 'Alice',
        age: 10,
      }],
    },
    {
      id: 4,
      name: 'Oleg',
      sex: 'male',
      isActive: false,
      children: null,
    }];
  }
}
