import open from 'open';

const title =
    '    __ __            __        _\n' +
    '   / //_/____   ____/ /____ _ (_)\n' +
    '  / ,<  / __ \\ / __  // __ `// /\n' +
    ' / /| |/ /_/ // /_/ // /_/ // /  \n' +
    '/_/ |_|\\____/ \\__,_/ \\__,_//_/\n';

const version = '1.0.3';

function help(): void {
    console.log(`${title}
kodai CLI version ${version} , (C) 2020 Kodai Matsumoto

Usage:

    kodai <command>

The commands are:

    github     show github account
    twitter    show twitter account
`);
}

const argv = process.argv.slice(2);

if (argv.length === 0) {
    help();
    process.exit(0);
}

switch (argv[0].toLocaleLowerCase()) {
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

    default:
        console.log(`kodai ${argv[0]}: unknown command\nRun 'kodai help' for usage.`);
        process.exit(1);
}
