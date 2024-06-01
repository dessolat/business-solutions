export const getFormattedName = (name: string): string => {
  const splittedName = name.split(' ');

  if (splittedName[1]) return `${splittedName[0]} ${splittedName[1][0]}.`;
	
  return splittedName[0];
};