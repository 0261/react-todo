const buildValidations = require('./build-utils/build-validations');
const commonConfig = require('./build-utils/webpack.common');

const webpackMerge = require('webpack-merge');

// 웹팩 플러그인을 추가할 수 있다. 
const addons = (addonsArg) => {

    // 애드온목록 가져오기
    let addons = [...[addonsArg]]
        .filter(Boolean); // If addons is undefined, filter it out

    return addons.map(addonName =>
        require(`./build-utils/addons/webpack.${addonName}.js`)
    );
};

// 'env'는 'package.json' 내 'scripts'의 환경 변수를 포함한다.
module.exports = env => {

    // 'buildValidations'를 사용해 'env' 플래그를 확인한다.
    if (!env) {
        throw new Error(buildValidations.ERR_NO_ENV_FLAG);
    }

    // 개발 또는 프로덕션 모드 중 사용할 웹팩 구성을 선택한다.
    const envConfig = require(`./build-utils/webpack.${env.env}.js`);

    // 'webpack-merge' =  공용설정 + 환경설정 + 플러그인
    const mergedConfig = webpackMerge(
        commonConfig,
        envConfig,
        ...addons(env.addons)
    );

    // 웹팩 최종 구성을 반환한다.
    return mergedConfig;
};