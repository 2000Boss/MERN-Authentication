const AWS = require("aws-sdk");
const uuid = require("uuid").v4;
const catchAsync = require("./../utils/catchAsync");

const s3 = new AWS.S3({
  accessKeyId: "AKIAZZJJ3APNFWUUTSSA",
  secretAccessKey: "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",
  region: "ap-south-1",
  apiVersion: "2010-12-01",
  signatureVersion: "v4",
  // expiresIn: 600,
});

exports.media_upload = catchAsync(async (req, res, next) => {
  const key = `${req.cookies.jwt.substr(1, 13)}/${uuid()}.jpeg`;
  s3.getSignedUrl(
    "putObject",
    {
      Bucket: "my-blog-bucket-closest-1029",
      ContentType: "image/jpeg",
      Key: key,
      Expires: 1000,
    },
    (err, url) => res.send({ key, url })
  );
});
