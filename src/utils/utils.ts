export function getLastArticlesWithNumber(
  numberReturned: number,
  list: Datas_Article[]
): Datas_Article[] {
  const finalTable = [];
  let maxPush = 0;
  for (const item of list) {
    maxPush !== numberReturned && finalTable.push(item);
    maxPush++;
  }

  return finalTable;
}
