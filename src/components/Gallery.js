function Gallery(props) {
  return (
    <div className="gallery1">
      <img
        src={props.thumbnail}
        alt="20v1thumbnail"
        className="thumbnail"
        width={360}
        height={200}
      />
      <div className="gallery2">
        <div className="galleryImg">
          <img src={props.profile} alt="profile" className="galleryProfiles" />
        </div>
        <div>
          <h3 className="galleryTitle">{props.title}</h3>
          <div className="gallery3">
            <p className="galleryInfo">{props.name}</p>
            <div className="gallery4">
              <p className="galleryInfo">{props.views}</p>
              <p className="galleryInfo">{props.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
