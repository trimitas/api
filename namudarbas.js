const paveikslai = async () => {
    try {
      const response = await fetch('https://api.artic.edu/api/v1/artworks');
      const data = await response.json();
      const artworks = data.data;
  
      artworks.forEach((artwork) => {
        const artist = artwork.artist_display;
        const title = artwork.title;
        const imageID = artwork.image_id;
  
        if (artwork.thumbnail !== null) {
          const nuotraukosURL = `https://www.artic.edu/iiif/2/${imageID}/full/843,/0/default.jpg`;
  
          const konteineris = document.createElement('div');
          konteineris.classList.add('container');
  
          const vardas_pavarde = document.createElement('h2');
          vardas_pavarde.textContent = artwork.artist_display;
          konteineris.appendChild(vardas_pavarde);
  
          const aprasymas = document.createElement('h4');
          aprasymas.textContent = artwork.title;
          konteineris.appendChild(aprasymas);
  
          const nuotraukadiv = document.createElement('div');
          nuotraukadiv.classList.add('artwork');
  
          const nuotrauka = document.createElement('img');
          nuotrauka.src = nuotraukosURL;
          nuotrauka.alt = title;
          nuotraukadiv.appendChild(nuotrauka);
  
          konteineris.appendChild(nuotraukadiv);
  
          // pridedame kūrinį į puslapį
          document.getElementById('foto-container').appendChild(
            konteineris
          );
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  paveikslai();
  
  
  
  