const pagination = (items, number) => {
  const itemsPerPage = number;
  const pages = Math.ceil(items.length / itemsPerPage);

  const newArray = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    const tempItems = items.slice(start, start + itemsPerPage);
    return tempItems;
  });

  return newArray;
};

export default pagination;
