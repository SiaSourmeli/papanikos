import fetchImages from "../../../lib/fetchImages";
import type { ImagesResults } from "../../../models/Images";
import ImgContainer from "./ImgContainer";
import addBlurredDataUrls from "../../../lib/getBase64";

export default async function Gallery() {
  const url = "https://api.pexels.com/v1/curated";

  const images: ImagesResults | undefined = await fetchImages(url);
  // console.log(images)
  if (!images) return;
  <h2> No images found</h2>;

  const photosWithBlur = await addBlurredDataUrls(images);

  return (
    <section className="container grid class">
      {photosWithBlur.map((photo) => (
        <ImgContainer key={photo.id} photo={photo} />
      ))}
    </section>
  );
}