// script.js

document.addEventListener('DOMContentLoaded', () => {
  const nftSelector = document.getElementById('nftSelector');
  const detailsContainer = document.getElementById('detailsContainer');

  // Load NFT data from data.js (assumes it's loaded first)
  if (typeof nftData !== 'undefined') {
    nftData.forEach((nft, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${nft.symbol} – ${nft.name}`;
      nftSelector.appendChild(option);
    });

    nftSelector.addEventListener('change', (e) => {
      const selectedIndex = e.target.value;
      if (selectedIndex !== '') {
        displayNFTDetails(nftData[selectedIndex]);
      } else {
        detailsContainer.innerHTML = '';
      }
    });
  }

  function displayNFTDetails(nft) {
    detailsContainer.innerHTML = `
      <div class="card">
        <h2>${nft.symbol} – ${nft.name}</h2>
        <div class="designation">${nft.designation}</div>
        <div class="equation">${nft.equation}</div>
        <div class="essence">${nft.essence}</div>
        <div class="explanation">${nft.explanation || ''}</div>
      </div>
    `;
  }
});

