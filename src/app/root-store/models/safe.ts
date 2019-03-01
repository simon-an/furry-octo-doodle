export interface Safe {
  id: string;
  value: number;
  itemSize: number;
  active: boolean;
  activeSince: Date;
  users: string[];
}
