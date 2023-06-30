const process = require("process");
const axios = require("axios");
const fs = require("fs");
const lineReader = require("line-reader");

// read file
// make GET request to each URL
// create file with HTML from each url 
// filename should be the hostname of the URL


// lineReader.eachLine(process.argv[2], async function(line,last){
//   console.log(`line ==> ${line}`);
//   let resp = await axios.get(line);
//   handleOutput(resp.data, `${line.slice(7)}.txt`);
// })


function cat(path, out) {
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    } else {
      console.log(data);
      handleOutput(data, out);
    }
  });
}





function handleOutput(text, out) {
    if (out) {
      fs.writeFile(out, text, 'utf8', function(err) {
        if (err) {
          console.error(`Couldn't write ${out}: ${err}`);
          process.exit(1);
        }
      });
    } else {
      console.log(text);
    }
  }

  cat(process.argv[2], 'testing.txt')

  //I need help figuring this out