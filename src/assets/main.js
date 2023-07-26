const API =
'https://youtube-v3-alternative.p.rapidapi.com/channel?id=UC3aj05GEEyzdOqYM5FLSFeg';

const content = null || document.getElementById('content');
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3d51035c9emshf51b2947bb9aedap16a747jsn1e72fb9cd228",
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

async function fetchData(urlApi, opt) {
  const response = await fetch(urlApi, opt);
  const data = await response.json();
  console.log(data);
  return data
}

(async () => {
  try {
    const videos = await fetchData(API, options);
    const videosArray = Object.entries(videos)
    console.log(videosArray[2][1]);
    let view = `
    ${videosArray[2][1].map(
      (video) => `
      <a href="https://youtube.com/watch?v=${video.videoId}" target="_blank">
        <div class="group relative">
            <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.thumbnail[0].url}" alt="${video.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.title}
                </h3>
            </div>
        </div>
    `
    ).slice(0,20).join('')}
    
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
