export async function listRequests() {
  try {
    const response = await fetch("/api/requests/", {
      method: "GET",
      headers: {
        Authorization: "",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status ${response.status}`);
    }

    const requestObject = await response.json();
    const files = convertTofileArray(requestObject);

    return files;
  } catch (error) {
    console.error(error);
  }
}

function convertTofileArray(requestObj) {
  const files = [];

  const requestLength = requestObj.results.length;
  for (let i = 0; i < requestLength; i++) {
    let file = {
      serverId: 0,
      id: 0,
      uploadType: "",
      name: "",
      url: "",
      date: "",
      duration: "",
      segments: [],
    };

    try {
      file.serverId = requestObj.results[i].id;
      file.id = i;
      file.uploadType = checkUploadType(requestObj.results[i].url);
      file.name = requestObj.results[i].filename;
      file.url = requestObj.results[i].url;
      file.date = requestObj.results[i].processed.slice(0, 10);
      file.duration = requestObj.results[i].duration;
    } catch (error) {
      console.error(error);
    }

    const segmentsLength = requestObj.results[i].segments.length;
    for (let j = 0; j < segmentsLength; j++) {
      let segment = {
        start: "",
        end: "",
        text: "",
      };

      try {
        segment.start = requestObj.results[i].segments[j].start.split(".")[0];
        segment.end = requestObj.results[i].segments[j].end.split(".")[0];
        segment.text = requestObj.results[i].segments[j].text;
      } catch (error) {
        console.error(error);
      }

      file.segments.push(segment);
    }

    files.push(file);
  }

  return files;
}

function checkUploadType(url) {
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.includes("rec")) {
    return "record";
  } else if (
    lowerUrl.includes("tmp") ||
    lowerUrl.includes("temp") ||
    lowerUrl.includes("upload") ||
    lowerUrl.includes("roshan-ai")
  ) {
    return "upload";
  } else {
    return "link";
  }
}