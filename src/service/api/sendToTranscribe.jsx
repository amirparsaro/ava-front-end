export async function sendToTranscribe(fileUrl) {
  try {
    const response = await fetch(
      "/api/transcribe_files/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token a85d08400c622b50b18b61e239b9903645297196",
        },
        body: JSON.stringify({
          media_urls: [fileUrl],
        }),
      }
    );

    const data = await response.json();
    const file = convertToFile(data);
    return file;

  } catch (error) {
    console.error(error.message);
  }
}

function convertToFile(data) {
  let file = {
    url: data[0].media_url,
    segments: [],
  };

  const segments = data[0].segments.map((item) => {
    return {
      start: item.start,
      end: item.end,
      text: item.text,
    };
  });

  file.segments = segments;
  return file;
}