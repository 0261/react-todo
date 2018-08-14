const chalk = require('chalk');
const ERR_NO_ENV_FLAG = chalk.red(
    `웹팩으로 번들하려면 --env.env flag를 꼭 사용해주세요. e.g., --env.env=dev or --env.env=prod`
);

module.exports = {
    ERR_NO_ENV_FLAG
};