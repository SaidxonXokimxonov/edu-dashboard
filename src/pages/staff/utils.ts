export const normalizeDate = (input: string): string => {
  // Agar stringda "-" belgisi bor va 2ta bo‘lsa => "dd-mm-yyyy" deb hisoblaymiz
  if (input.split("-").length === 3 && input[2] === "-") {
    return input; // Allaqachon kerakli formatda
  }

  // Boshqa holatda sana formatlab chiqariladi
  const date = new Date(input);
  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};
