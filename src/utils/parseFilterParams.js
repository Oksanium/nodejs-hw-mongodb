const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isType = ['work', 'home', 'personal'].includes(type);

  if (isType) return type;
  else return;
};

export const parseFilterParams = (query) => {
  const { isFavourite, type } = query;
  let parsedIsFavourite;

  if (isFavourite === 'true') parsedIsFavourite = true;
  if (isFavourite === 'false') parsedIsFavourite = false;

  let parsedType = parseType(type);

  return {
    isFavourite: parsedIsFavourite,
    type: parsedType,
  };
};
