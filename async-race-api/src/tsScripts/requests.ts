const SERVER_URL: string = "http://127.0.0.1:3000/";

export const getGarageData = async () =>
  (await fetch(`${SERVER_URL}garage`)).json();
export const getCarEngine = async (id: string) =>
  (await fetch(`${SERVER_URL}engine?id=${id}&status=started`)).json();
export const getDriveStatus = async (id: string) =>
  (await fetch(`${SERVER_URL}engine?id=${id}&status=drive`)).json();
export const getStopCar = async (id: string) =>
  (await fetch(`${SERVER_URL}engine?id=${id}&status=stopped`)).json();
export const getCreateCar = async (name: string, color: string) =>
  (
    await fetch(`${SERVER_URL}garage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        color: color,
      }),
    })
  ).json();
export const getRemoveCar = async (id: string) =>
  (
    await fetch(`${SERVER_URL}garage/${id}`, {
      method: "DELETE",
    })
  ).json();
export const getUpdateCar = async (id: string, name: string, color: string) => 
  (await fetch(`${SERVER_URL}garage/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      color: color
    })
  })).json();
