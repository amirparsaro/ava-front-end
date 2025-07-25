export async function deleteRequest(serverId) {
  try {
    const response = await fetch("/api/requests/" + serverId + "/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token a85d08400c622b50b18b61e239b9903645297196",
      },
    });

    if (!response.ok) {
      throw new Error(`Response status ${response.status}`);
    }
    console.log(
      "File with serverId: " + serverId + " was successfully deleted."
    );

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
