interface Child {
  name: string;
  age: number;
}

export interface People {
  id: number;
  name: string;
  sex: string;
  isActive: boolean;
  children: Child[] | null;
}
