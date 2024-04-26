const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const findUser = (token: string) =>
  fetch(`${apiBaseUrl}/home/admin`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
