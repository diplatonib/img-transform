var glob = require('glob');
var fs = require('fs');
var replace = require('replace');

// Find file(s)
glob('*.html', function(err, files) {
    if (err) { throw err; }
    files.forEach(function(item, index, array) {
          console.log(item + ' found');
          // Read file
          console.log(fs.readFileSync(item, 'utf8'));
          // Find and Replace string
          replace({
              regex: /\.png|\.svg/g,
              replacement: '\nsome text\n\t\tbjhbhjmn',
              paths: [item],
              recursive: true,
              silent: true
          });
          console.log('Replacement complete');
          // Read file
          console.log(fs.readFileSync(item, 'utf8'));
      });
});