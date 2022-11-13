import * as bcrypt from 'bcrypt';

const hashString = async (text: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(text, salt);
};

export {hashString};
