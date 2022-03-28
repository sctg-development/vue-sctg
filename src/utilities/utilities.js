import { Cloudinary } from "@cloudinary/url-gen";
import { quality } from "@cloudinary/url-gen/actions/delivery";
import { fill } from "@cloudinary/url-gen/actions/resize";

const cloudinaryConf = {
  cloud: {
    cloudName: "sctg-development",
  },
};

const cloudinary = new Cloudinary(cloudinaryConf);

const getCloudinaryImg = (img, width, height) => {
  let _img = cloudinary.image(img);
  if (width !== undefined || height !== undefined) {
    let _fill = fill();
    if (width !== undefined) {
      _fill = _fill.width(width);
    }
    if (height !== undefined) {
      _fill = _fill.height(height);
    }
    _img.resize(_fill);
  }
  return _img.delivery(quality("auto")).format('auto');
}

const getCloudinaryResponsiveBackground = (img) => {
  return getCloudinaryImg(img,(Math.ceil(window.innerWidth/200)*200));
}
export { getCloudinaryImg,getCloudinaryResponsiveBackground }; 