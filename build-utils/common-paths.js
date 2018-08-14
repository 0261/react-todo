const path = require('path');
const rootDirName = path.resolve(__dirname, '../');
const outputPath = path.join(rootDirName, 'dist');
const appEntry = path.join(rootDirName,'src');
module.exports = {
  rootDirName,
  outputPath,
  appEntry
};


/**
 * 프로젝트 루트 + /dist => 웹팩번들 + 프로덕션환경빌드 결과
 * 프로젝트 루트 + /src => 웹팩번들 + 개발환경빌드 결과
 */