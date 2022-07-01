export default interface TodoItem {
  id: number;
  checked: boolean;
  description: string;
  doneDate?: Date;
}
