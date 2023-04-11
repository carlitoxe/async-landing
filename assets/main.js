const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCX6OQ3DkcsbYNE6H8uQQuVA&part=snippet%2Cid&order=date&maxResults=8';

const content = null || document.getElementById('content'); //Access to html element

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '32e125e9e5msh4b5c68ddae731fcp150c11jsn6c7cdad207e0',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-base text-black">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0, 8).join('')}
    `
    content.innerHTML = view;
    } catch (error) {
        console.error(error);
        content.innerHTML = `Sorry, an error has ocurred. Error info: ${error}`;
    }
})();