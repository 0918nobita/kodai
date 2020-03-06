import minimist from 'minimist';
import open from 'open';

const title =
    '    __ __            __        _\n' +
    '   / //_/____   ____/ /____ _ (_)\n' +
    '  / ,<  / __ \\ / __  // __ `// /\n' +
    ' / /| |/ /_/ // /_/ // /_/ // /  \n' +
    '/_/ |_|\\____/ \\__,_/ \\__,_//_/\n';

const version = '1.0.3';

const help = (): void => {
    console.log(title);
    console.log(`kodai CLI version ${version} , (C) 2020 Kodai Matsumoto\n`);
    console.log(`Usage:

        kodai <command>
    `);
    console.log(`The commands are:

        github     show github account
        twitter    show twitter account
        version    print version
    `);
};

const argv = minimist(process.argv.slice(2));

if (argv._.length === 0) {
    help();
    process.exit(0);
}

switch (argv._[0].toLocaleLowerCase()) {
    case 'help':
        help();
        process.exit(0);

    case 'github':
        console.log('Opening browser...');
        open('https://github.com/0918nobita').then(() => {
            process.exit(0);
        });
        break;

    case 'twitter':
        console.log('Opening browser...');
        open('https://twitter.com/0918nobita').then(() => {
            process.exit(0);
        })
        break;

    case 'version':
        console.log(`version ${version}`);
        process.exit(0);

    default:
        console.log(`kodai ${argv._[0]}: unknown command\nRun 'kodai help' for usage.`);
        process.exit(1);
}
