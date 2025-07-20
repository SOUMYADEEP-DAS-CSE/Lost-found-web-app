type LostItem = {
  name: string;
  description: string;
  location: string;
  contact: string;
};

const items: LostItem[] = [];

export function addItem(item: LostItem) {
  items.push(item);
}

export function getItems() {
  return items;
}
