import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import imageminPngquant from "imagemin-pngquant";
import imageminJpegtran from "imagemin-jpegtran";

imagemin(["./images/*.{jpg,png,svg}"], {
  destination: "./images/webp/",
  plugins: [
    /*imageminWebp({
        quality: 50,
    }),*/
    imageminJpegtran(),
    imageminPngquant({
      quality: [0.6, 0.8],
      speed: 1,
      size: "1MB"
    }),
  ],
}).then(() => {
  console.log("Images Converted Successfully!!!");
});