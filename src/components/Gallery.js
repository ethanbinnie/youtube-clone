function Gallery(props) {
  return (
    <div className="gallery-1">
      <img
        src={props.thumbnail}
        alt="20v1thumbnail"
        className="thumbnail"
        width={360}
        height={200}
      />
      <div className="gallery-2">
        <div className="gallery-img">
          <img src={props.profile} alt="profile" className="gallery-profiles" />
        </div>
        <div>
          <h3 className="gallery-title">{props.title}</h3>
          <div className="gallery-3">
            <p className="gallery-info">{props.name}</p>
            <div className="gallery-4">
              <p className="gallery-info">{props.views}</p>
              <p className="gallery-info">{props.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
