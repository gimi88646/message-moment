import { LinkPath } from "@/data/LinkPath";

// AlphaNumeric Generator
const generateRandomString = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
};

// Secure Link Generator
const generateSecureLink = () => {
  const randomString = generateRandomString(16);
  return `${LinkPath}${randomString}`;
};

// Standard Link Generator
const generateStandardLink = () => {
  const randomString = generateRandomString(16);
  return `${LinkPath}${randomString}`;
};

export { generateRandomString, generateSecureLink, generateStandardLink };
