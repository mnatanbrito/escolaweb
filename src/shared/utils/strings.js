export const formatDisplayName = (displayName) => {
  if (!displayName) {
    return '';
  }

  const parts = displayName.split(' ');

  return `${parts[0]} ${parts.pop()}`;
};
