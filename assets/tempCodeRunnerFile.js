async function getAlbums() {
    try {
        const albums = await fetchData(spotifyApi, spotifyOptions);
        let view = `
        ${albums.data.artist.discography.albums.items.map(album => `
        <div class="bg-red-900 rounded-lg p-4">
        <a href="${album.releases.items[0].sharingInfo.shareUrl}" target="_blank">
            <img class="w-full mb-4 rounded-lg" src="${album.releases.items[0].coverArt.sources[0].url}"
                alt="Portada ${album.releases.items[0].name}">
            <div class="text-center">
                <h3 class="text-2xl font-bold text-white mb-2">${album.releases.items[0].name}</h3>
                <p class="text-white font-medium">
                    Year: ${album.releases.items[0].date.year} <br>
                    Songs: ${album.releases.items[0].tracks.totalCount}
                </p>
            </div>
        </a>
      </div>
        `,).slice(0).join('')}
    `
    contentAlbums.innerHTML = view;
    } catch (error) {
        console.error(error);
    }
}