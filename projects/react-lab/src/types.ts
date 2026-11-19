export type GoalItem = {
  id: number;
  title: string;
  done: boolean;
};

export type Todo = Omit<GoalItem, "id"> & {
  id: string;
};
