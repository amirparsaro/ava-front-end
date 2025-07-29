export async function sendToTranscribe(fileUrl) {
  try {
    const response = await fetch(
      "/api/transcribe_files/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
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
    console.error(error);
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