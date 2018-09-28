import React from 'react';
import PropTypes from 'prop-types';

import Gallery from 'react-grid-gallery';

const ImgGallery = ({ singleAnimalDisplay }) => {
  const filterImgList = () => {
    const imgs = [];
    singleAnimalDisplay[0].media.photos.photo.forEach((x) => {
      if (x['@size'] === 'x') {
        imgs.push({
          src: x.$t,
          thumbnail: x.$t,
          thumbnailWidth: 0,
          thumbnailHeight: 0,
          alt: 'pet_img',
        });
      }
    });
    return (
      <Gallery
        images={imgs}
        margin={3}
        enableImageSelection={false}
        backdropClosesModal
        // showLightboxThumbnails
        showCloseButton={false}
      />
    );
  };

  return (
    <div>
      {filterImgList()}
    </div>
  );
};

ImgGallery.propTypes = {
  singleAnimalDisplay: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImgGallery;
