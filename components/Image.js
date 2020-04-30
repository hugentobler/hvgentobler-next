// components/Image.js
// Turn images into lazy loaded iamges.

// Modules
import React from 'react';

export default class Image extends React.Component {
  componentDidMount() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    console.log(images);
  }

  render() {
    // Get children props.
    let children = this.props.children;
    let src = children.props.src;
    let alt = children.props.alt;
    let loading = children.props.loading;

    // Declare responsive sources.
    let pathAndName = src.substring(0, src.lastIndexOf('.'));
    let fileExtension = src.substring(src.lastIndexOf('.'));
    let src1200 = pathAndName + '-1200' + fileExtension;
    let src640 = pathAndName + '-640' + fileExtension;

    return (
      <picture>
        <source media='(min-width: 641px)' srcSet={src1200} />
        <source media='(max-width: 640px)' srcSet={src640} />
        {loading
          ? <img src={src1200} alt={alt} loading='lazy'/>
          : <img src={src1200} alt={alt} />
        }
      </picture>
    );
  }
};
