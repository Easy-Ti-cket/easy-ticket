import imagemin from "imagemin";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import path from "path";
import glob from "glob";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsFolder = path.join(__dirname, "public", "assets");

const compressImages = async () => {
  const files = glob.sync(`${assetsFolder}/**/*.{png,svg}`);

  if (files.length === 0) {
    return;
  }

  //console.log("Files found:", files);

  const compressedFiles = await imagemin(files, {
    destination: assetsFolder, // 압축된 파일을 저장할 경로
    plugins: [
      imageminPngquant({ quality: [0.6, 0.8] }), // PNG 파일 압축
      imageminSvgo({
        // SVG 파일 최적화
        plugins: [
          { name: "removeViewBox", active: false },
          { name: "removeDimensions", active: true }
        ]
      })
    ]
  });

  //console.log("Images optimized:", compressedFiles);
};

compressImages().catch((err) =>
  console.error("Error during compression:", err)
);
