//import { Redirect } from "./Redirect";
//import Image from "react-bootstrap/Image";
export let Card = (props: any) => {
  function dataOrDefault() {
    const defaultLink =
      "https://www.artic.edu/iiif/2/d68a3f34-411d-efd4-154e-48b9c565b125/full/843,/0/default.jpg";

    if (props.item) {
      return props.item.image_id;
    } else return defaultLink;
  }
  //const imageEndLink = "/full/843,/0/default.jpg";
  //const imageStartLink = "https://www.artic.edu/iiif/2/";

  //const artworkId = props.item.image_id;
  //let constructedLink = imageStartLink + artworkId + imageEndLink;
  let goToArtist = () => {};
  return (
    <div>
      <div className={("ofearz")}>
        <div className={("card")}>
            <Image
              roundedCircle
              alt=" 3 cats"
              height="300"
              width="300"
              src={`https://www.artic.edu/iiif/2/${props.item.image_id}/full/843,/0/default.jpg`}
              onMouseOut={() => console.log("out of hover")}
              onMouseOver={() => console.log("into hover")}
            />
            <div
              style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
            ></div>
          <ul>
            
              <p className={("truncate")} onClick={goToArtist}>
                Title: {props.item.title || "Artist name"}
              </p>
              <p className={("truncate alignLeft")} onClick={goToArtist}>
                Artist: {props.item.artist_title || "Title Name"}
              </p>
              <p className={("truncate alignLeft")} onClick={goToArtist}>
                Origin: {props.item.place_of_origin || "origin"}
              </p>
          </ul>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
